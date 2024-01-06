import React from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import SearchSvg from "./Images/search.svg";
import CleanIcon from "./Images/iconClean.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [nameBrand, setNameBrand] = React.useState("");

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
      const filtered = products.filter(
        (item) =>
          item.category.name
            .toLowerCase()
            .startsWith(searchValue.toLowerCase()) ||
          item.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );

      const uniqueFiltered = [...new Set(filtered)];

      if (uniqueFiltered.length === 0) {
        if (!location.pathname.includes("/product-page/")) {
          navigate(`/product-page`);
        }

        setFilteredItems("");
      } else {
        const List = uniqueFiltered.map((ob) => {
          return ob.series.toLowerCase();
        });

        const nameBrand = uniqueFiltered[0].category.name;

        List.unshift(nameBrand.toLowerCase());
        setFilteredItems([...new Set(List)]);
      }
    }
  }, [searchValue]);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="header__searchinput">
      <div className="header__input">
        <img src={SearchSvg} alt="search" />
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
              <li key={index}>
                {item
                  .split(new RegExp(`(${value})`, "gi"))
                  .map((part, i) =>
                    part.toLowerCase() === value.toLowerCase() ? (
                      <mark key={i}>{part}</mark>
                    ) : (
                      part
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
