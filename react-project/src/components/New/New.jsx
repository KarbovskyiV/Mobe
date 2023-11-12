import React from "react";

import Title from "../Title/Title";
import Prod from "./images/prod.jpg";

import MyRating from "../MyRating/MyRating";
import Button from "../Button";

import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

import style from "./style.scss";

const New = () => {
  return (
    <section className="new">
      <div className="new__container">
        <div className="new__title">
          <Title text="New" />
        </div>
        <div className="new__content">
          <div className="new__card">
            <div className="new__inner">
              <div className="new__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="new__card-content">
                <div className="new__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="new__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="new__price">
                <div className="new__price-inner">
                  <div className="new__card-oldprice">$ 250.99</div>
                  <div className="new__card-newprice">$ 235.99</div>
                </div>
                <Button type="violet" title="Add to order" />
              </div>
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
          <div className="new__card">
            <div className="new__inner">
              <div className="new__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="new__card-content">
                <div className="new__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="new__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="new__price">
                <div className="new__price-inner">
                  <div className="new__card-oldprice">$ 250.99</div>
                  <div className="new__card-newprice">$ 235.99</div>
                </div>
                <Button type="violet" title="Add to order" />
              </div>
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
          <div className="new__card">
            <div className="new__inner">
              <div className="new__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="new__card-content">
                <div className="new__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="new__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="new__price">
                <div className="new__price-inner">
                  <div className="new__card-oldprice">$ 250.99</div>
                  <div className="new__card-newprice">$ 235.99</div>
                </div>
                <Button type="violet" title="Add to order" />
              </div>
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
          <div className="new__card">
            <div className="new__inner">
              <div className="new__card-photo">
                <img src={Prod} alt="" />
              </div>
              <div className="new__card-content">
                <div className="new__card-title">
                  Samsung Galaxy A24 6/128GB Black
                </div>
                <div className="new__card rating">
                  <MyRating />
                  <div className="rating__revews">198 reviews</div>
                </div>
              </div>
              <div className="new__price">
                <div className="new__price-inner">
                  <div className="new__card-oldprice">$ 250.99</div>
                  <div className="new__card-newprice">$ 235.99</div>
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

export default New;
