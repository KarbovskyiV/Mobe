import React from "react";
import MyRating from "../MyRating/MyRating.jsx";
import Button from "../Button";
import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";
import foto1 from "../../assets/img/imageBuy1.jpg";
import foto2 from "../../assets/img/imageBuy2.jpg";
import foto3 from "../../assets/img/imageBuy3.jpg";
import foto4 from "../../assets/img/imageBuy4.jpg";

function BuyWithUs({ id, name }) {
  return (
    <div>
      <div className="buyWithUs__card">
        <div className="buyWithUs__inner">
          <div className="buyWithUs__card-photo">
            <img src={foto1} alt="" />
          </div>
          <div className="buyWithUs__card-content">
            <div className="buyWithUs__card-title">
              Samsung Galaxy A24 6/128GB Black
            </div>
            <div className="buyWithUs__card rating">
              <MyRating />
              <div className="rating__revews">198 reviews</div>
            </div>
          </div>
          <div className="buyWithUs__price">
            <div className="promotion__price-inner">
              <div className="buyWithUs__card-oldprice">$ 250.99</div>
              <div className="buyWithUs__card-newprice">$ 235.99</div>
            </div>
            <Button type="violet" title="Add to order" />
          </div>
          <IconsHeart />
          <IconsWeight />
        </div>
      </div>
      <div className="buyWithUs__card">
        <div className="buyWithUs__inner">
          <div className="buyWithUs__card-photo">
            <img src={foto2} alt="" />
          </div>
          <div className="buyWithUs__card-content">
            <div className="buyWithUs__card-title">
              Samsung Galaxy A24 6/128GB Black
            </div>
            <div className="buyWithUs__card rating">
              <MyRating />
              <div className="rating__revews">198 reviews</div>
            </div>
          </div>
          <div className="buyWithUs__price">
            <div className="promotion__price-inner">
              <div className="buyWithUs__card-oldprice">$ 250.99</div>
              <div className="buyWithUs__card-newprice">$ 235.99</div>
            </div>
            <Button type="violet" title="Add to order" />
          </div>
          <IconsHeart />
          <IconsWeight />
        </div>
      </div>
      <div className="buyWithUs__card">
        <div className="buyWithUs__inner">
          <div className="buyWithUs__card-photo">
            <img src={foto3} alt="" />
          </div>
          <div className="buyWithUs__card-content">
            <div className="buyWithUs__card-title">
              Samsung Galaxy A24 6/128GB Black
            </div>
            <div className="buyWithUs__card rating">
              <MyRating />
              <div className="rating__revews">198 reviews</div>
            </div>
          </div>
          <div className="buyWithUs__price">
            <div className="promotion__price-inner">
              <div className="buyWithUs__card-oldprice">$ 250.99</div>
              <div className="buyWithUs__card-newprice">$ 235.99</div>
            </div>
            <Button type="violet" title="Add to order" />
          </div>
          <IconsHeart />
          <IconsWeight />
        </div>
      </div>
      <div className="buyWithUs__card">
        <div className="buyWithUs__inner">
          <div className="buyWithUs__card-photo">
            <img src={foto4} alt="" />
          </div>
          <div className="buyWithUs__card-content">
            <div className="buyWithUs__card-title">
              Samsung Galaxy A24 6/128GB Black
            </div>
            <div className="buyWithUs__card rating">
              <MyRating />
              <div className="rating__revews">198 reviews</div>
            </div>
          </div>
          <div className="buyWithUs__price">
            <div className="promotion__price-inner">
              <div className="buyWithUs__card-oldprice">$ 250.99</div>
              <div className="buyWithUs__card-newprice">$ 235.99</div>
            </div>
            <Button type="violet" title="Add to order" />
          </div>
          <IconsHeart />
          <IconsWeight />
        </div>
      </div>
    </div>
  );
}

export default BuyWithUs;
