import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { connect } from "react-redux";
import { CatalogOpenedContext, SearchContext } from "../../App.js";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Cross from "./Image/iconCross.svg";
import Open from "./Image/iconOpen.svg";
import Close from "./Image/iconClose.svg";
import { useLocation } from "react-router-dom";
import MenuStep from "../../components/MenuStep/MenuStep.jsx";
import ErrorBoundary from "../../components/ErrorBoundary";
import Catalog from "../../components/Catalog/Catalog.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import PromotionContainer from "../../Containers/PromotionsContainer/PromotionsContainer.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

import "./style.scss";
import Subscribe from "../../components/Subscribe/Subscribe.jsx";

const ProductList = () => {
  const label = useSelector((state) => state.filter.label);
  const page = useSelector((state) => state.filter.page);
  const series = useSelector((state) => state.filter.series);
  const search = useSelector((state) => state.filter.search);

  const { searchValue } = React.useContext(SearchContext);

  const [currentPage, setCurrentPage] = React.useState(1);

  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const location = useLocation();
  const { catalogOpened } = React.useContext(CatalogOpenedContext);

  const [showSeriesCheckboxes, setShowSeriesCheckboxes] = useState(true);
  const [showBrandsCheckboxes, setShowBrandsCheckboxes] = useState(true);
  const [showPrices, setShowPrices] = useState(true);
  const [showMemoriesCheckboxes, setShowMemoriesCheckboxes] = useState(true);
  const [showDiagonalesCheckboxes, setShowDiagonalesCheckboxes] =
    useState(true);

  const [allSeries, setAllSeries] = useState([]);
  const [allMemories, setAllMemories] = useState([]);
  const [allDiagonales, setAllDiagonales] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const allSerie = Array.from(
      new Set(products.map((product) => product.series))
    );

    const filterSeriesNull = allSerie.filter((ser) => ser !== null);
    setAllSeries(filterSeriesNull);
  }, [products]);

  useEffect(() => {
    const allMemory = Array.from(
      new Set(products.map((product) => product.built_in_memory))
    );
    const filterSeriesNull = allMemory.filter((mem) => mem !== null);
    setAllMemories(filterSeriesNull);
  }, [products]);

  useEffect(() => {
    const allDiagonal = Array.from(
      new Set(products.map((product) => product.display_diagonal))
    );

    const filterSeriesNull = allDiagonal.filter((diag) => diag !== null);
    setAllDiagonales(filterSeriesNull);
  }, [products]);

  const initialBrand = new URLSearchParams(location.search).get("label");

  const [selectedBrands, setSelectedBrands] = useState(
    label !== "undefined" ? [label] : []
  );
  const [selectedModels, setSelectedModels] = useState(
    series[0] !== "undefined" ? [series] : []
  );

  const [selectedMemories, setSelectedMemories] = useState([]);
  const [selectedDiagonales, setSelectedDiagonales] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const countProductsInBrand = (brand) => {
    return products.filter(
      (product) => product.category.name === brand && isInPriceRange(product)
    ).length;
  };

  const countProductsInModel = (model) => {
    return products.filter(
      (product) => product.series === model && isInPriceRange(product)
    ).length;
  };

  const countProductsInMemories = (memory) => {
    return products.filter(
      (product) => product.built_in_memory === memory && isInPriceRange(product)
    ).length;
  };

  const countProductsInDiagonales = (diagonal) => {
    return products.filter(
      (product) =>
        product.display_diagonal === diagonal && isInPriceRange(product)
    ).length;
  };

  const handleBrandChange = (brand) => {
    const selectedBrandsFilter = selectedBrands.filter((brand) => brand !== "");
    const updatedBrands = selectedBrandsFilter.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrandsFilter, brand];

    const filterProducts = Array.from(
      new Set(
        products.filter(
          (product) =>
            updatedBrands.length === 0 ||
            updatedBrands.includes(product.category.name)
        )
      )
    );

    const brandSeries = filterProducts
      .map((product) => product.series)
      .filter((series) => series !== null);

    const uniqueSeries = Array.from(new Set(brandSeries));

    const brandMemories = filterProducts
      .map((product) => product.built_in_memory)
      .filter((mem) => mem !== null);

    const uniqueMemories = Array.from(new Set(brandMemories));

    const brandDiagonales = filterProducts
      .map((product) => product.display_diagonal)
      .filter((diag) => diag !== null);

    const uniqueDiagonales = Array.from(new Set(brandDiagonales));

    setAllSeries(uniqueSeries);

    setAllMemories(uniqueMemories);

    setAllDiagonales(uniqueDiagonales);

    setSelectedBrands(updatedBrands);

    setSelectedModels(
      selectedModels.filter((model) => brandSeries.includes(model))
    );

    setSelectedMemories(
      selectedMemories.filter((memory) => brandMemories.includes(memory))
    );

    setSelectedDiagonales(
      selectedDiagonales.filter((diagonal) =>
        brandDiagonales.includes(diagonal)
      )
    );
  };

  const handleModelChange = (model) => {
    if (selectedModels.includes(model)) {
      setSelectedModels(
        selectedModels.filter((selectedModel) => selectedModel !== model)
      );
    } else {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const handleMemoryChange = (memory) => {
    if (selectedMemories.includes(memory)) {
      setSelectedMemories(
        selectedMemories.filter((selectedMemory) => selectedMemory !== memory)
      );
    } else {
      setSelectedMemories([...selectedMemories, memory]);
    }
  };

  const handleDiagonalChange = (diagonal) => {
    if (selectedDiagonales.includes(diagonal)) {
      setSelectedDiagonales(
        selectedDiagonales.filter(
          (selectedDiagonal) => selectedDiagonal !== diagonal
        )
      );
    } else {
      setSelectedDiagonales([...selectedDiagonales, diagonal]);
    }
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const isInPriceRange = (product) => {
    const isInRange =
      (minPrice === "" || parseFloat(product.price) >= parseFloat(minPrice)) &&
      (maxPrice === "" || parseFloat(product.price) <= parseFloat(maxPrice));
    return isInRange;
  };

  const filteredProducts = products.filter((product) => {
    const isInSelectedBrands =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.category.name);

    const isInSelectedModels =
      selectedModels.length === 0 || selectedModels.includes(product.series);

    const isInSelectedMemories =
      selectedMemories.length === 0 ||
      selectedMemories.includes(product.built_in_memory);

    const isInSelectedDiagonales =
      selectedDiagonales.length === 0 ||
      selectedDiagonales.includes(product.display_diagonal);

    return (
      isInSelectedBrands &&
      isInSelectedModels &&
      isInSelectedMemories &&
      isInSelectedDiagonales &&
      isInPriceRange(product)
    );
  });

  console.log(sortOption, 5585858);
  console.log(filteredProducts);

  const sortedProducts = [
    filteredProducts.length === 0 ? products : { ...filteredProducts },
  ].sort((a, b) => {
    if (sortOption === "newest") {
      console.log("newest");
      return new Date(b.created_at) - new Date(a.created_at);
    } else if (sortOption === "lowToHigh") {
      console.log("lowToHigh");
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortOption === "highToLow") {
      console.log("highToLow");
      return parseFloat(b.price) - parseFloat(a.price);
    }
    return 0;
  });

  console.log(sortedProducts[0]);

  const innerOpenClose = (toShow, setToShow) => {
    return (
      <button onClick={() => setToShow(!toShow)}>
        {!toShow ? (
          <img src={Open} alt="open" />
        ) : (
          <img src={Close} alt="close" />
        )}
      </button>
    );
  };

  const getCancel = () => {
    setSelectedBrands([]);
    setSelectedModels([]);
    setSelectedMemories([]);
    setSelectedDiagonales([]);
  };

  //Пагинация
  const productsPerPage = 21;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToShow1 = Object.keys(sortedProducts[0])
    .filter((key) => {
      const obj = sortedProducts[0][key];

      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((key) => sortedProducts[0][key]);

  const productsToShow = productsToShow1.slice(startIndex, endIndex);

  const totalProducts = productsToShow1.length;
  const pageCount = Math.ceil(totalProducts / productsPerPage);
  //конец пагинации

  const loading = useSelector((state) => state.products.loading);

  const error = useSelector((state) => state.products.error);

  const skeletons = [...new Array(productsPerPage)].map((_, index) => (
    <Skeleton key={index} />
  ));

  console.log(selectedBrands);

  return (
    <div className="filter__container">
      {catalogOpened && (
        <ErrorBoundary>
          <Catalog />
        </ErrorBoundary>
      )}
      <MenuStep label={label} page={page} series={series} search={search} />
      <h1 className="filter__titleSeries">
        {series === "undefined" ? label : series}
      </h1>
      <div className="filter__choice">
        <div className="filter__choice-box">
          <div className="selected-products">
            {productsToShow1.length} products are selected
          </div>
          <div className="selected-cancel" onClick={() => getCancel()}>
            Cancel
          </div>
          <div className="selected-brandbox">
            {selectedBrands && selectedBrands.length !== 0 && (
              <div
                className="selected-brands"
                style={
                  selectedBrands && selectedBrands.length !== 0
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                {selectedBrands &&
                  selectedBrands.length !== 0 &&
                  selectedBrands.map((brand) => (
                    <div key={brand} className="selected-brand">
                      {brand}
                      <img
                        onClick={() => console.log(brand)}
                        src={Cross}
                        alt="cross"
                      />
                    </div>
                  ))}
              </div>
            )}

            {/* {selectedModels[0].length !== 0 &&
              selectedModels.map((series, index) => (
                <div
                  key={`model_${index}`}
                  className="selected-brand"
                  style={
                    selectedModels[0] !== 0
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  {series}
                  <img
                    onClick={() => handleModelChange(series)}
                    src={Cross}
                    alt="cross"
                  />
                </div>
              ))} */}
          </div>
        </div>

        <div className="sort">
          <select value={sortOption} onChange={handleSortChange}>
            <option value="newest">Newest first</option>
            <option value="lowToHigh">Price-low to hight</option>
            <option value="highToLow">Price-hight to low</option>
            <option value="highToLow">Most popular</option>
          </select>
        </div>
      </div>

      <div className="filter__inner">
        <div className="filter">
          <div className="brands">
            <div className="brands-inner">
              <h2>Brand</h2>
              {innerOpenClose(showBrandsCheckboxes, setShowBrandsCheckboxes)}
            </div>
            {showBrandsCheckboxes &&
              Array.from(
                new Set(products.map((product) => product.category.name))
              ).map((brand, index) => (
                <label className="filter__brand" key={index}>
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="checkbox-custom"
                  />
                  {brand} ({countProductsInBrand(brand)})
                </label>
              ))}
          </div>
          <div className="series">
            <div className="series-inner">
              <h2>Series</h2>
              {innerOpenClose(showSeriesCheckboxes, setShowSeriesCheckboxes)}
            </div>
            {showSeriesCheckboxes && (
              <div className="models">
                {allSeries.map((model, index) => (
                  <label className="filter__model" key={index}>
                    <input
                      type="checkbox"
                      value={model}
                      checked={selectedModels.includes(model)}
                      onChange={() => handleModelChange(model)}
                    />
                    {model} ({countProductsInModel(model)})
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="price">
            <div className="price-inner">
              <h2>Price, $</h2>
              {innerOpenClose(showPrices, setShowPrices)}
            </div>
            {showPrices && (
              <div className="price-block">
                <label>
                  <input
                    placeholder="$"
                    type="number"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                  />
                </label>
                <p> - </p>
                <label>
                  <input
                    placeholder="$"
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                  />
                </label>
                <button className="price__button">OK</button>
              </div>
            )}
          </div>
          <div className="memory">
            <div className="memory-inner">
              <h2>Internal storage</h2>
              {innerOpenClose(
                showMemoriesCheckboxes,
                setShowMemoriesCheckboxes
              )}
            </div>
            {showMemoriesCheckboxes && (
              <div className="memories">
                {allMemories.map((memory, index) => (
                  <label className="filter__memory" key={index}>
                    <input
                      type="checkbox"
                      value={memory}
                      checked={selectedMemories.includes(memory)}
                      onChange={() => handleMemoryChange(memory)}
                    />
                    {memory} ({countProductsInMemories(memory)})
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="diagonal">
            <div className="diagonal-inner">
              <h2>Display size</h2>
              {innerOpenClose(
                showDiagonalesCheckboxes,
                setShowDiagonalesCheckboxes
              )}
            </div>
            {showDiagonalesCheckboxes && (
              <div className="diagonals">
                {allDiagonales.map((diagonal, index) => (
                  <label className="filter__diagonal" key={index}>
                    <input
                      type="checkbox"
                      value={diagonal}
                      checked={selectedDiagonales.includes(diagonal)}
                      onChange={() => handleDiagonalChange(diagonal)}
                    />
                    {diagonal} ({countProductsInDiagonales(diagonal)})
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="products-list-box">
          <div className="products-list">
            {loading ? (
              skeletons
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              productsToShow.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onChangePage={(number) => setCurrentPage(number)}
          />
        </div>
      </div>
      <PromotionContainer />
      <Subscribe />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(ProductList);
