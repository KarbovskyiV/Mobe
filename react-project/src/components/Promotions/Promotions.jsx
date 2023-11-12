import React from "react";

import Title from "../Title/Title";
import Prod from "./images/prod.jpg";

import MyRating from "../MyRating/MyRating.jsx";
import Button from "../Button";

import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

import style from "./style.scss";

const Promotions = () => {
  return (
    <section className="promotions">
      <div className="promotions__container">
        <div className="promotions__title">
          <Title text="Promotions" />
        </div>
        <div className="promotions__content">
          <div className="promotions__card">
            <div className="promotions__inner">
              <div className="promotions__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="promotions__card-content">
                <div className="promotions__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="promotions__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="promotions__price">
                <div className="promotion__price-inner">
                  <div className="promotions__card-oldprice">$ 250.99</div>
                  <div className="promotions__card-newprice">$ 235.99</div>
                </div>
                <Button type="violet" title="Add to order" />
              </div>
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
          <div className="promotions__card">
            <div className="promotions__inner">
              <div className="promotions__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="promotions__card-content">
                <div className="promotions__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="promotions__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="promotions__price">
                <div className="promotion__price-inner">
                  <div className="promotions__card-oldprice">$ 250.99</div>
                  <div className="promotions__card-newprice">$ 235.99</div>
                </div>
                <Button type="violet" title="Add to order" />
              </div>
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
          <div className="promotions__card">
            <div className="promotions__inner">
              <div className="promotions__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="promotions__card-content">
                <div className="promotions__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="promotions__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="promotions__price">
                <div className="promotion__price-inner">
                  <div className="promotions__card-oldprice">$ 250.99</div>
                  <div className="promotions__card-newprice">$ 235.99</div>
                </div>
                <Button type="violet" title="Add to order" />
              </div>
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
          <div className="promotions__card">
            <div className="promotions__inner">
              <div className="promotions__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="promotions__card-content">
                <div className="promotions__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="promotions__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="promotions__price">
                <div className="promotion__price-inner">
                  <div className="promotions__card-oldprice">$ 250.99</div>
                  <div className="promotions__card-newprice">$ 235.99</div>
                </div>
                <Button type="violet" title="Add to order" />
              </div>
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
