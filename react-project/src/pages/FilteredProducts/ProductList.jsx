import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { connect } from "react-redux";
import { CatalogOpenedContext } from "../../App.js";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

import Image from "./Image/image.jpg";
import Cross from "./Image/iconCross.svg";
import Arrow from "./Image/iconArrow.svg";
import Open from "./Image/iconOpen.svg";
import Close from "./Image/iconClose.svg";
import Button from "../../components/Button";
import MyRating from "../../components/MyRating/MyRating";
import { useLocation } from "react-router-dom";
import MenuStep from "../../components/MenuStep/MenuStep.jsx";
import ErrorBoundary from "../../components/ErrorBoundary";
import Catalog from "../../components/Catalog/Catalog.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import PromotionContainer from "../../Containers/PromotionsContainer/PromotionsContainer.jsx";

import "./style.scss";
import Subscribe from "../../components/Subscribe/Subscribe.jsx";

const ProductList = () => {
  const { label } = useParams();
  const { page } = useParams();
  const { series } = useParams();

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
    series !== "undefined" ? [series] : []
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
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    console.log(updatedBrands, 77);

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

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "lowToHigh") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortOption === "highToLow") {
      return parseFloat(b.price) - parseFloat(a.price);
    }
    return 0;
  });

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
  // количество продуктов, отображаемых на странице.
  const productsPerPage = 21;

  // рассчет начальный и конечный индексы отображаемых продуктов
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToShow = sortedProducts.slice(startIndex, endIndex);

  //автоматический расчет количества страниц
  const totalProducts = sortedProducts.length;

  const pageCount = Math.ceil(totalProducts / productsPerPage);

  //конец пагинации

  return (
    <div className="filter__container">
      {catalogOpened && (
        <ErrorBoundary>
          <Catalog />
        </ErrorBoundary>
      )}
      <MenuStep label={label} page={page} series={series} />
      <h1 className="filter__titleSeries">
        {series === "undefined" ? `${label} phones` : series}
      </h1>
      <div className="filter__choice">
        <div className="filter__choice-box">
          <div className="selected-products">
            {filteredProducts.length} products are selected
          </div>
          <div className="selected-cancel" onClick={() => getCancel()}>
            Cancel
          </div>
          <div className="selected-brandbox">
            {selectedBrands &&
              selectedBrands.map((brand) => (
                <div className="selected-brand">
                  {brand}
                  <img
                    onClick={() => handleBrandChange(brand)}
                    src={Cross}
                    alt="cross"
                  />
                </div>
              ))}

            {selectedModels &&
              selectedModels.map((series) => (
                <div className="selected-brand">
                  {series}
                  <img
                    onClick={() => handleModelChange(series)}
                    src={Cross}
                    alt="cross"
                  />
                </div>
              ))}
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
              ).map((brand) => (
                <label className="filter__brand" key={brand}>
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
                {allSeries.map((model) => (
                  <label className="filter__model" key={model}>
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
                {allMemories.map((memory) => (
                  <label className="filter__memory" key={memory}>
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
                {allDiagonales.map((diagonal) => (
                  <label className="filter__diagonal" key={diagonal}>
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
        <div className="products-list">
          {productsToShow.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
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
