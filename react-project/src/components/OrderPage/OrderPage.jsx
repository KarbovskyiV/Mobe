import React from "react";

import style from "./style.scss";
import Title from "../Title/Title";

const OrderPage = () => {
  return (
    <>
      <div className="order__container">
        <Title text="Placing an order" />
        <div className="order__form">
          <div className="order__form details">
            <div className="details__title">Your contact details</div>
            <div className="details__form">
              <div className="details__form-name">
                <label for="">Surname</label>
                <input type="text" />
                <label for="">Name</label>
                <input type="text" />
              </div>
              <form className="details__form-contacts">
                <label for="">Mobile phone</label>
                <input type="text" />
                <label for="">Email</label>
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
        <div className="order product">
          <div className="product__title">
            <h3>Order</h3>
            <img src="" alt="" />
          </div>
          <div className="product__inner">
            <img src="" alt="" />
            <div className="product__name">
              Smartphone Apple iPhone 12 128Gb White
            </div>
          </div>
          <div className="product__price">
            <div className="variable">
              <div className="product__price-old">$ 754</div>
              <div className="product__price-new">$ 754</div>
            </div>
            <div className="product__price-actual">$ 734</div>
          </div>
        </div>
        <div className="delivery">
          <h3 className="delivery__title">Delivery</h3>
          <form className="delivery__form" action="">
            <div className="delivery__form radio">
              <input type="radio" name="Pickup from Nova Post" />
              <label>Free</label>
            </div>
            <div className="delivery__form-select">
              <select name="towns" id="">
                <option value="Kyiv">Kyiv</option>
                <option value="Kyiv">Kyiv</option>
                <option value="Kyiv">Kyiv</option>
              </select>
              <select name="adress" id="">
                <option value="Kyiv">Department No. 4</option>
                <option value="Kyiv">Department No. 4</option>
                <option value="Kyiv">Department No. 4</option>
              </select>
            </div>
          </form>
          <a href="#"></a>
          <input type="radio" name="Pickup from Ukrpost" />
        </div>
        <div className="order__total"></div>
      </div>
    </>
  );
};

export default OrderPage;
