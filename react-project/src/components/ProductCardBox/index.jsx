import React from "react";
import fotoDesktop from "../../assets/img/imageDesk.jpg";
import fotoTablet from "../../assets/img/imageTab.jpg";
import fotoMobile from "../../assets/img/imageMob.jpg";
import Button from "../Button.jsx";
import "./style.scss";
import { DesktopContext, TabletContext, MobileContext } from "../../App.js";
import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

function ProductsCart({ id, name }) {
  const { desktop } = React.useContext(DesktopContext);
  const { mobile } = React.useContext(MobileContext);

  return (
    <>
      {desktop ? (
        <div className="productscart">
          <div className="productscart__korb">
            <img src={fotoDesktop} alt="img" />
            <div className="productscart__svg">
              <IconsHeart />
              <IconsWeight />
            </div>
          </div>
          <div className="productscart__rating-box">
            <div className="productscart__title-box">
              <p>Apple iPhone 15 128GB Black</p>
              <div className="productscart__rating">
                <div className="productscart__rating-stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#FFE500"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#FFE500"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#FFE500"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#FFE500"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill="#FFE500"
                    />
                  </svg>
                </div>
                <span>132 reviews</span>
              </div>
            </div>
            <div className="productscart__price">
              <p>$ 1391</p>
              <Button type="violet" title="Add to order" />
            </div>
          </div>
        </div>
      ) : (
        <div className="productscart__Tablet">
          <div className="productscart__image_title">
            <img src={mobile ? fotoMobile : fotoTablet} alt="img" />
            {!mobile ? <p>Apple iPhone 15 128GB Black</p> : ""}
          </div>

          <div className="productscart__price">
            <p>$ 1391</p>
            <Button type="violet" title="Add to order" />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductsCart;
