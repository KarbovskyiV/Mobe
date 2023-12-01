import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartActiveContext, MobileContext } from "../../App.js";
import Button from "../../components/Button.jsx";
import phone from "../../assets/img/phone.png";
import phoneMobile from "../../assets/img/imageS.jpg";
import SliderCart from "../../components/Sliders/SliderCart.jsx";
import CartItems from "../../components/CartItems.jsx";
import CartIsEmpty from "../CartIsEmpty.jsx";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../redux/slices/cartAdd";

const ShoppingCart = ({ title, img, price }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cartAdd);

  const onClickClear = () => {
    if (window.confirm("To clean a shopping cart?")) {
      dispatch(clearItems());
    }
  };

  const wrapRef = useRef(null);

  const [countValue, setCountValue] = React.useState(0);
  const [openMenuDelete, setOpenMenuDelete] = React.useState(false);
  const [totalCount] = React.useState();

  const { setShoppingCartActive } = React.useContext(ShoppingCartActiveContext);
  const { mobile } = React.useContext(MobileContext);

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

  console.log(items, "items");

  return (
    <div className="shoppingcart__container">
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
          {items.length > 0 ? (
            <>
              <div className="shoppingcart__cart">
                <h4>Shopping cart</h4>

                {items.map((item) => (
                  <CartItems key={item.id} {...item} />
                ))}

                <div className="shoppingcart__down">
                  <Button type="white" title="Continue shopping" />
                  <div className="shoppingcart__down-summ">
                    <h5>$ {totalPrice}</h5>
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
            </>
          ) : (
            <CartIsEmpty />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
