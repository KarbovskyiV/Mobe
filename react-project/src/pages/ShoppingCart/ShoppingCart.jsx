import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartActiveContext, MobileContext } from "../../App.js";
import Button from "../../components/Button.jsx";
import phone from "../../assets/img/phone.png";
import phoneMobile from "../../assets/img/imageS.jpg";
import SliderCart from "../../components/Sliders/SliderCart.jsx";
import "./style.scss";

import { addToWishList } from '../../redux/slices/wishlistSlice';
import { useDispatch, useSelector } from "react-redux";
import {
  addToCompare,
  removeFromCompare,
} from "../../redux/slices/compareSlice";
import { removeWishlist } from '../../redux/slices/wishlistSlice';

const ShoppingCart = (item) => {
  const wrapRef = useRef(null);
  const dispatch = useDispatch();
  const addToWishHandler = (item) => {
    dispatch(addToWishList(item))
    setIsWishlisted(!isWishlisted);
   }
   const removeWishlishHandler = (productId) => {
    dispatch(removeWishlist(productId));
  };
  const [countValue, setCountValue] = React.useState(0);
  const [openMenuDelete, setOpenMenuDelete] = React.useState(false);
  const [totalCount] = React.useState();

  const { setShoppingCartActive } = React.useContext(ShoppingCartActiveContext);
  const { mobile } = React.useContext(MobileContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handClick = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target))
      setShoppingCartActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handClick);
    return () => {
      document.removeEventListener("mousedown", handClick);
    };
  }, []);

  return (
    <div className="shoppingcart__window" ref={wrapRef}>
      <div className="shoppingcart__krestik">
        <Link to="/">
          <svg
            onClick={() => {
              setShoppingCartActive(false);
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_258_7121)">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#28003E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_258_7121">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>

      <div className="shoppingcart__box">
        <div className="shoppingcart__cart">
          <h4>Shopping cart</h4>
          <div className="shoppingcart__up">
            <div className="shoppingcart__img">
              <img src={mobile ? phoneMobile : phone} alt="img" />
            </div>
            <div className="shoppingcart__add">
              <label>Smartphone Apple iPhone 12 128Gb White</label>
              <div className="shoppingcart__plusminus">
                <svg
                  onClick={() =>
                    setCountValue(
                      countValue === 0 ? countValue : countValue - 1
                    )
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M5 13V11H19V13H5Z" fill="#28003E" />
                </svg>
                <div className="shoppingcart__number">{countValue}</div>
                <svg
                  onClick={() => setCountValue(countValue + 1)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                    fill="#28003E"
                  />
                </svg>
              </div>
            </div>
            <div className="shoppingcart__summDelete">
              <div
                className="shoppingcart__delete"
                style={
                  openMenuDelete === false
                    ? { display: "none" }
                    : { display: "flex" }
                }
              >
                <div onClick={() => addToWishHandler(item)} className={`delete-box1 ${isWishlisted ? "selected" : ""}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z"
                      stroke="#28003E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>Add to favourite</p>
                </div>
                <div onClick={() => removeWishlishHandler(item)} className="delete-box2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M10 11V17M14 11V17"
                      stroke="#28003E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>Delete</p>
                </div>
              </div>

              <svg
                style={
                  openMenuDelete === true
                    ? { display: "none" }
                    : { display: "flex" }
                }
                onClick={() => setOpenMenuDelete(true)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="shoppingcart__summs">
                <div className="shoppingcart__summ1">
                  $ {countValue !== 0 ? totalCount * countValue : 0}
                </div>
                <div className="shoppingcart__summ2">
                  $ {countValue !== 0 ? totalCount * countValue : 0}
                </div>
              </div>
            </div>
          </div>
          <div className="shoppingcart__down">
            <Button type="white" title="Continue shopping" />
            <div className="shoppingcart__down-summ">
              <h5>$ 734</h5>
              <Button type="violet" title="Complete the order" />
            </div>
          </div>
        </div>
        <div className="shoppingcart__cheaper">
          <h5>Together it's cheaper</h5>
          <SliderCart />

          <div className="shoppingcart__down-summ2">
            <h5>$ 749</h5>
            <Button type="violet" title="Add to order" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
