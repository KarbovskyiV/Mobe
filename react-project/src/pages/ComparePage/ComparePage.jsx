// ComparePage.jsx
import React, { useEffect, useState } from "react";

//import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import MyRating from "../../components/MyRating/MyRating";
import Button from "../../components/Button";
import IconsHeart from "../../components/IconsHeart/IconsHeart";
import IconsWeight from "../../components/IconsWeight/IconsWeight";
import Title from "../../components/Title/Title";
import { ReactComponent as Close } from "./images/close.svg";
import { fetchProducts } from "../../actions/productActions";

import Image from "./images/1.jpg";

import Section from "../../components/Section/Section";
import HotPriceContainer from "../../Containers/HotPrice/HotPriceContainer";

import "./style.scss";
import PageLink from "../../components/PageLink/PageLink";

const ComparePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);
  console.log("products", products);
  //const loading = useSelector((state) => state.products.loading);
  //const error = useSelector((state) => state.products.error);

  //const [allProducts, setAllProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);

  const [showDifferences, setShowDifferences] = useState(false);

  const toggleDifferences = () => {
    setShowDifferences((prevShowDifferences) => !prevShowDifferences);
  };

  //useEffect(() => {
  //  const fetchData = async () => {
  //    try {
  //      const response = await axios.get(
  //        "http://mobe.publicvm.com:81/api/products"
  //      );
  //      if (Array.isArray(response.data)) {
  //        setAllProducts(response.data);
  //      } else {
  //        console.log("Дані не є масивом.");
  //      }
  //    } catch (error) {
  //      console.error("Помилка при завантаженні даних:", error);
  //    }
  //  };

  //  fetchData();
  //}, []);

  useEffect(() => {
    return () => {
      localStorage.removeItem("cart"); // Викликається при виході з компоненту
    };
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("storedItems", storedItems);
    if (storedItems.length > 2) {
      const lastTwoItems = storedItems.slice(-2);
      localStorage.setItem("cart", JSON.stringify(lastTwoItems));
      setComparedProducts(lastTwoItems);
    } else {
      setComparedProducts(storedItems);
    }
  }, []);

  const handleClearComparison = (productId) => {
    const updatedComparedProducts = comparedProducts.filter(
      (id) => id !== productId
    );

    localStorage.setItem("cart", JSON.stringify(updatedComparedProducts));
    setComparedProducts(updatedComparedProducts);
  };

  if (!Array.isArray(products)) {
    return <div>Завантаження...</div>;
  }

  const comparedProductsData = products.filter((product) =>
    comparedProducts.includes(product.id)
  );
  console.log("comparedProducts", comparedProducts);

  return (
    <div className="compare__section">
      <div className="compare__container">
        <PageLink text="Comparable goods" />
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
                    <img src={Image} alt="" />
                  </div>
                  <div className="compare__card-content">
                    <div className="compare__card-title">{product.name}</div>
                    <div className="compare__card rating">
                      <MyRating />
                      <div className="rating__revews">198 відгуків</div>
                    </div>
                  </div>
                  <div className="compare__price">
                    <div className="compare__price-inner">
                      <div className="compare__card-oldprice">$ 250.99</div>
                      <div className="compare__card-newprice">
                        {product.price}$
                      </div>
                    </div>
                    <Button type="violet" title="Add to cart" />
                  </div>
                  <IconsHeart className="compare-heart" />
                  <IconsWeight className="compare-weight" />
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
              <p onClick={() => setShowDifferences(false)}>
                All characteristics
              </p>
              <p onClick={toggleDifferences}>Differences</p>
            </div>
            <div className="compare__table">
              <div className="compare__row compare__header">
                <div style={{ width: "300px" }}>Бренд</div>
                {comparedProductsData.map((product, index) => (
                  <div key={index} style={{ width: "388px" }}>
                    {showDifferences
                      ? comparedProductsData.every(
                          (otherProduct) =>
                            otherProduct.differences?.brand ===
                            product.differences?.brand
                        )
                        ? "Same"
                        : product.differences?.brand
                      : product.brand}
                  </div>
                ))}
              </div>
              <div className="compare__row">
                <div style={{ width: "300px" }}>Ціна</div>
                {comparedProductsData.map((product, index) => (
                  <div key={index} style={{ width: "388px" }}>
                    {showDifferences
                      ? comparedProductsData.every(
                          (otherProduct) =>
                            otherProduct.differences?.price ===
                            product.differences?.price
                        )
                        ? "Same"
                        : product.differences?.price
                      : product.price}
                  </div>
                ))}
              </div>
              <div className="compare__row">
                <div style={{ width: "300px" }}>Опис</div>
                {comparedProductsData.map((product, index) => (
                  <div key={index} style={{ width: "388px" }}>
                    {showDifferences
                      ? comparedProductsData.every(
                          (otherProduct) =>
                            otherProduct.differences?.description ===
                            product.differences?.description
                        )
                        ? "Same"
                        : product.differences?.description
                      : product.description}
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
