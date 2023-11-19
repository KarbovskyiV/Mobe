// ComparePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyRating from "../../components/MyRating/MyRating";
import Button from "../../components/Button";
import IconsHeart from "../../components/IconsHeart/IconsHeart";
import IconsWeight from "../../components/IconsWeight/IconsWeight";
import Title from "../../components/Title/Title";
import { ReactComponent as Close } from "./images/close.svg";
import "./style.scss";

import Section from "../../components/Section/Section";
import HotPriceContainer from "../../Containers/HotPrice/HotPriceContainer";

const ComparePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);
  console.log("allProducts", allProducts);
  const [showDifferences, setShowDifferences] = useState(false);
   const toggleDifferences = () => {
    setShowDifferences(!showDifferences);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");
        if (Array.isArray(response.data.products)) {
          setAllProducts(response.data.products);
        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setComparedProducts(storedItems);
  }, []);

  const handleClearComparison = (productId) => {
    const updatedComparedProducts = comparedProducts.filter(
      (id) => id !== productId
    );

    localStorage.setItem("cart", JSON.stringify(updatedComparedProducts));
    setComparedProducts(updatedComparedProducts);
  };

  if (!Array.isArray(allProducts)) {
    return <div>Завантаження...</div>;
  }

  const comparedProductsData = allProducts.filter((product) =>
    comparedProducts.includes(product.id)
  );

  return (
    <div className="compare__section">
      <div className="compare__container">
        <div className="compare__title">
          <Title text="Comparable goods" />
        </div>
        <div className="compare__content">
          {comparedProductsData.length > 0 ? (
            comparedProductsData.map((product) => (
              <div className="compare__card" key={product.id}>
                <div className="compare__close">
                  <button
                    className="compare__clear-btn"
                    onClick={() => handleClearComparison(product.id)}
                  >
                    <Close />
                  </button>
                </div>
                <div className="compare__inner">
                  <div className="compare__card-photo">
                    <img src={product.images[1]} alt="" />
                  </div>
                  <div className="promotions__card-content">
                    <div className="promotions__card-title">
                      {product.title}
                    </div>
                    <div className="promotions__card rating">
                      <MyRating />
                      <div className="rating__revews">198 відгуків</div>
                    </div>
                  </div>
                  <div className="promotions__price">
                    <div className="promotion__price-inner">
                      <div className="promotions__card-oldprice">$ 250.99</div>
                      <div className="promotions__card-newprice">
                        {product.price}$
                      </div>
                       <Button type="violet" title="Add to cart" />
                    </div>
                   
                  </div>
                  <IconsHeart />
                  <IconsWeight />
                </div>
              </div>
            ))
          ) : (
            <div className="compare__absence">
              Немає товарів для порівняння.
            </div>
          )}
        </div>
        {comparedProductsData.length > 0 && (
          <div className="compare__char">
            <div className="choice">
              <p>All characteristics</p>
              <p onClick={toggleDifferences}>Differences</p>
            </div>
            <div className="compare__table">
              <div className="compare__row compare__header">
                <div style={{ width: "300px" }}>Бренд</div>
                {comparedProductsData.map((product) => (
                  <div key={product.id} style={{ width: "388px" }}>
                    {product.brand}
                  </div>
                ))}
              </div>
              <div className="compare__row">
                <div style={{ width: "300px" }}>Ціна</div>
                {comparedProductsData.map((product) => (
                  <div key={product.id} style={{ width: "388px" }}>
                    {product.price}
                  </div>
                ))}
              </div>
              <div className="compare__row">
                <div style={{ width: "300px" }}>Опис</div>
                {comparedProductsData.map((product) => (
                  <div key={product.id} style={{ width: "388px" }}>
                    {product.description}
                  </div>
                ))}
              </div>
              <div className="compare__row">
                <div style={{ width: "300px" }}>Опис</div>
                {comparedProductsData.map((product) => (
                  <div key={product.id} style={{ width: "388px" }}>
                    {product.description}
                  </div>
                ))}
              </div>
              <div className="compare__row">
                <div style={{ width: "300px" }}>Опис</div>
                {comparedProductsData.map((product) => (
                  <div key={product.id} style={{ width: "388px" }}>
                    {product.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <HotPriceContainer />
      </div>
    </div>
  );
};

export default ComparePage;
