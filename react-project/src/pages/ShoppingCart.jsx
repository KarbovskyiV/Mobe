import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartActiveContext } from "../App";
import Button from "../components/Button";

const ShoppingCart = () => {
  const wrapRef = useRef(null);

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
          <div className="shoppingcart__up"></div>
          <div className="shoppingcart__down">
            <Button
              style={{ borderColor: "#747474" }}
              title="Continue shopping"
            />
          </div>
        </div>
        <div className="shoppingcart__cheaper">
          <h5>Together it's cheaper</h5>
          <div className="shoppingcart__up"></div>
          <div className="shoppingcart__down">
            <Button
              style={{ borderColor: "#747474" }}
              title="Continue shopping"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
