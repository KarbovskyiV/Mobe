import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartActiveContext } from "../App";
import Button from "../components/Button";
import phone from "../assets/img/phone.png";
import SliderCart from "../components/Sliders/SliderCart.jsx";

const ShoppingCart = () => {
  const wrapRef = useRef(null);

  const [countValue, setCountValue] = React.useState(0);
  const [totalCount] = React.useState();

  const { setShoppingCartActive } = React.useContext(ShoppingCartActiveContext);

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
              <img src={phone} alt="img" />
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
              {/* <div className="shoppingcart__service">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#28003E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Additional services (1)</p>
              </div> */}
            </div>
            <div className="shoppingcart__summ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="#28003E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="#28003E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="#28003E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
