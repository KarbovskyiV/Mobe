import React from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import SearchSvg from "./Images/search.svg";
import CleanIcon from "./Images/iconClean.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLabel, setPage, setSeries } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [filteredItems, setFilteredItems] = React.useState([]);

  const products = useSelector((state) => state.products.products);

  const location = useLocation();
  const navigate = useNavigate();

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
    setFilteredItems("");
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  React.useEffect(() => {
    console.log(searchValue, "searchValue");

    if (searchValue !== "") {
      const filtered1 = products.filter(
        (item) =>
          item.category.name
            .toLowerCase()
            .startsWith(searchValue.toLowerCase()) ||
          item.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );

      if (filtered1.length === 0) {
        /*  const filtered2 = products.filter(
          (item) =>
            item.category.name
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        ); */
        navigate(`/product-page`);
      } else {
        const uniqueFiltered = [...new Set(filtered1)];

        if (uniqueFiltered.length === 0) {
          setFilteredItems("");
        } else {
          const List = uniqueFiltered.map((ob) => {
            return ob.series;
          });

          const nameBrand = uniqueFiltered[0].category.name;

          List.unshift(nameBrand);
          setFilteredItems([...new Set(List)]);
        }
      }
    }
  }, [searchValue]);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const getFilterPage = (label, page, series) => {
    dispatch(setLabel(label));
    dispatch(setPage(page));
    dispatch(setSeries(series));
    setFilteredItems("");
    setValue("");
    if (!location.pathname.includes("/product-page/")) {
      navigate(`/product-page`);
    }
  };

  return (
    <div className="header__searchinput">
      <div className="header__input">
        <img
          src={SearchSvg}
          alt="search"
          onClick={() =>
            value !== "" ? { onChangeInput } : alert("No dates!")
          }
        />
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          type="text"
          placeholder="search..."
        ></input>
      </div>
      <ul
        className="list"
        style={
          filteredItems.length === 0 ? { display: "none" } : { display: "flex" }
        }
      >
        {filteredItems && value
          ? filteredItems.map((item, index) => (
              <li
                key={index}
                onClick={() =>
                  getFilterPage(
                    filteredItems[0],
                    index === 0 ? "sortBrand" : "sortSeries",
                    item
                  )
                }
              >
                {item
                  .split(new RegExp(`(${value})`, "gi"))
                  .map((part, i) =>
                    part.toLowerCase() === value.toLowerCase() ? (
                      <mark key={i}>{part.toLowerCase()}</mark>
                    ) : (
                      part.toLowerCase()
                    )
                  )}
              </li>
            ))
          : ""}
      </ul>
      {value && <img src={CleanIcon} alt="search" onClick={onClickClear} />}
    </div>
  );
};

export default Search;
