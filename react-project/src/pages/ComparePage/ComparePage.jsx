// Import the necessary dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import MyRating from "../../components/MyRating/MyRating";
import Button from "../../components/Button";
import IconsHeart from "../../components/IconsHeart/IconsHeart";
import IconsWeight from "../../components/IconsWeight/IconsWeight";
import Title from "../../components/Title/Title";
import { ReactComponent as Close } from "./images/close.svg";
import Image from "./images/1.jpg";
import HotPriceContainer from "../../Containers/HotPrice/HotPriceContainer";
import "./style.scss";
import PageLink from "../../components/PageLink/PageLink";

const ComparePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const comparedProducts = useSelector(
    (state) => state.compare.comparedProducts
  );

  return (
    <div className="compare__section">
      <div className="compare__container">
        <PageLink text="Comparable goods" />
        <div className="compare__title">
          <Title text="Comparable goods" />
        </div>
        <div className="compare__content">
          {comparedProducts.map((product) => (
            <div className="compare__card" key={product.id}>
              <div className="compare__close">
                <button className="compare__clear-btn">
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
          ))}
          {comparedProducts.length === 0 && (
            <div className="compare__absence">
              Немає товарів для порівняння.
            </div>
          )}
        </div>

        <HotPriceContainer />
      </div>
    </div>
  );
};

export default ComparePage;
