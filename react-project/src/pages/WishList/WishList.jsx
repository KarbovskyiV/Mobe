// ComparePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyRating from "../../components/MyRating/MyRating";

import IconsHeart from "../../components/IconsHeart/IconsHeart";
import IconsWeight from "../../components/IconsWeight/IconsWeight";

import { ReactComponent as Close } from "../ComparePage/images/close.svg";
import { ReactComponent as Left } from "./Images/left.svg";

import Title from "../../components/Title/Title";

import Image from "./Images/1.png";

import AdminLink from "../../components/AdminLink/AdminLink";
import Chat from "../../components/Chat/Chat";
import Subscribe from "../../components/Subscribe/Subscribe";
import HotPriceContainer from "../../Containers/HotPrice/HotPriceContainer";
import Btn from "../../components/Btn/Btn";
import More from "../../components/IconMore/IconMore";
import MoreBtn from "../../components/IconMore/IconMore";

import "./style.scss";
import Button from "../../components/Button";

const WishList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [allProducts, setAllProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [isContentHidden, setIsContentHidden] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://mobe.publicvm.com:81/api/products"
        );
        if (Array.isArray(response.data)) {
          setAllProducts(response.data);
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
    const firstTwoItems = storedItems.slice(0, 6);
    setComparedProducts(firstTwoItems);
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
  const handleTitleClick = () => {
    setIsContentHidden(!isContentHidden);
  };
  const comparedProductsData = allProducts.filter((product) =>
    comparedProducts.includes(product.id)
  );

  return (
    <div className="wish-list__section">
      <div className="wish-list__container">
        <div className={`wish-list__admin ${isContentHidden ? "visible" : ""}`}>
          <h2>Hello, USER</h2>
          <div className="wish-list__admin_inner">
            <AdminLink />
          </div>
        </div>
        <div
          className={`wish-list__content ${isContentHidden ? "hidden" : ""}`}
        >
          <div onClick={handleTitleClick} className="wish-list__title">
            <div className="title-inner">
              <Left />
              <Title text="Wish list" />
            </div>
          </div>
          <div className="wish-list__box">
            {comparedProductsData.length > 0 ? (
              comparedProductsData.map((product) => (
                <div className="wish-list__card" key={product.id}>
                  <MoreBtn />
                  <div className="wish-list__close">
                    <button
                      className="wish-list__clear-btn"
                      onClick={() => handleClearComparison(product.id)}
                    >
                      {" "}
                      <Close />{" "}
                    </button>
                  </div>

                  <div className="wish-list__inner">
                    <div className="wish-list__card-photo">
                      <img src={Image} alt="" />
                    </div>

                    <div className="wish-flex">
                      <div className="wish-list__card-content">
                        <div className="wish-list__card-title">
                          {product.name}
                        </div>
                        <div className="wish-list__card rating">
                          <MyRating />
                          <div className="rating__revews">198 відгуків</div>
                        </div>
                      </div>
                      <div className="wish-list__price">
                        <div className="wish-list__price-inner">
                          <div className="wish-list__card-oldprice">
                            250.99$
                          </div>
                          <div className="wish-list__card-newprice">
                            {product.price}$
                          </div>
                        </div>
                        {windowWidth >= 490 ? (
                          <Button type="violet" title="Add to cart" />
                        ) : (
                          <Btn />
                        )}
                      </div>
                    </div>
                    <IconsHeart className="heart-wish" />
                    <IconsWeight className="weight-wish" />
                  </div>
                </div>
              ))
            ) : (
              <div className="wish-list__absence">Відсутні товари</div>
            )}
          </div>
        </div>
      </div>
      <HotPriceContainer className="wish-hotprice" />
      <Chat className="wish-chat" />
      <Subscribe className="wish__sub" />
    </div>
  );
};

export default WishList;
