import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { connect } from "react-redux";

import Image from "./Image/image.jpg";

import Button from "../../components/Button";
import MyRating from "../../components/MyRating/MyRating";

import style from "./style.scss";

const ProductList = ({}) => {
  const products = useSelector((state) => state.products.products);
  console.log("products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
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
      (product) => product.name === model && isInPriceRange(product)
    ).length;
  };

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
    setSelectedModels([]);
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
      selectedModels.length === 0 || selectedModels.includes(product.name);

    return isInSelectedBrands && isInSelectedModels && isInPriceRange(product);
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

  return (
    <div className="filter__container">
      <div className="filter choice">
        <div className="selected-products">
          {filteredProducts.length} Products are selected
        </div>
        <div className="selected-brand">{selectedBrands}</div>
        <div className="selected-series">{selectedModels}</div>
      </div>

      <div className="sort">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="newest">Newest first</option>
          <option value="lowToHigh">Ціна від низької до високої</option>
          <option value="highToLow">Ціна від високої до низької</option>
        </select>
      </div>

      <div className="filter__inner">
        <div className="filter">
          <div className="brands">
            <h2>Brand</h2>
            {Array.from(
              new Set(products.map((product) => product.category.name))
            ).map((brand) => (
              <label className="filter__brand" key={brand}>
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                {brand} ({countProductsInBrand(brand)})
              </label>
            ))}
          </div>
          <div className="models">
            <h2>Series</h2>
            {Array.from(new Set(products.map((product) => product.name))).map(
              (model) => (
                <label className="filter__model" key={model}>
                  <input
                    type="checkbox"
                    value={model}
                    checked={selectedModels.includes(model)}
                    onChange={() => handleModelChange(model)}
                  />
                  {model} ({countProductsInModel(model)})
                </label>
              )
            )}
          </div>
          <div className="price">
            <h2>Price</h2>
            <label>
              Min:
              <input
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
            </label>
            <label>
              Max:
              <input
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </label>
          </div>
        </div>
        <div className="products">
          <h2>Список продуктів</h2>
          <ul className="products-list">
            {sortedProducts.map((product) => (
              <li key={product.id}>
                <div className="section__card">
                  <div className="section__inner">
                    <div className="section__card-photo">
                      <img src={Image} alt="" />
                    </div>
                    <div className="section__card-content">
                      {product.name}
                      <div className="section__card rating">
                        <MyRating />
                        <div className="rating__revews">198 відгуків</div>
                      </div>
                    </div>
                    <div className="section__price">
                      <div className="promotion__price-inner">
                        <div className="section__card-oldprice">$ 250.99</div>
                        <div className="section__card-newprice">
                          {product.price}$
                        </div>
                      </div>
                      <Button type="violet" title={"Add to Cart"} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});
console.log("mapStateToProps", mapStateToProps);

export default connect(mapStateToProps)(ProductList);
