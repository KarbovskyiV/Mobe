import React, { useRef, useEffect } from "react";
import { MobileContext } from "../App.js";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/cartAdd";
import { addToWishList } from "../redux/slices/wishlistSlice";
import {
  addLikedProduct,
  removeLikedProduct,
} from "../redux/slices/wishlistSlice";
import IconsHeart from "./IconsHeart/IconsHeart";

const CartItems = ({ item, id, title, price, count, img }) => {
  const { mobile } = React.useContext(MobileContext);
  const [openMenuDelete, setOpenMenuDelete] = React.useState(false);
  const dispatch = useDispatch();

  const likedProducts = useSelector(
    (state) => state.likedProducts.likedProducts
  );

  const isWishlisted =
    item && likedProducts.some((product) => product === item);

  const handleLike = () => {
    dispatch(addLikedProduct(item));
  };

  const handleUnlike = () => {
    dispatch(removeLikedProduct(item.id));
  };

  const onClickPlus = () => {
    if (count >= 0) {
      setActiveMinusCount(true);
    }
    dispatch(
      addItem({
        id,
      })
    );
  };

  const [activeMinusCount, setActiveMinusCount] = React.useState(true);

  useEffect(() => {
    if (count === 1) {
      setActiveMinusCount(false);
    } else {
      setActiveMinusCount(true);
    }
  }, [count, dispatch, id]);

  const onClickMinus = () => {
    if (activeMinusCount === true) {
      dispatch(minusItem(id));
    }
  };

  const onClickDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      dispatch(removeItem(id));
    }
  };
  const wrapRef = useRef(null);

  const handClick = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target))
      setOpenMenuDelete(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handClick);
    return () => {
      document.removeEventListener("mousedown", handClick);
    };
  }, []);

  return (
    <div className="shoppingcart__up">
      <div className="shoppingcart__up__box">
        <div className="shoppingcart__img">
          <img src={mobile ? img : img} alt="img" />
        </div>
        <div className="shoppingcart__add">
          <label>{title}</label>
          <div className="shoppingcart__plusminus">
            {activeMinusCount ? (
              <svg
                onClick={onClickMinus}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M5 13V11H19V13H5Z" fill="#28003E" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M5 13V11H19V13H5Z" fill="#747474" />
              </svg>
            )}
            <div className="shoppingcart__number">{count}</div>
            <svg
              onClick={onClickPlus}
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
      </div>
      <div className="shoppingcart__summDelete">
        <div
          className="shoppingcart__delete"
          style={
            openMenuDelete === false ? { display: "none" } : { display: "flex" }
          }
          ref={wrapRef}
        >
          <div className="delete-box1">
            <IconsHeart
              className={`heart ${isWishlisted ? "selected" : ""}`}
              onClick={isWishlisted ? handleUnlike : handleLike}
            />
            <p>Add to favourite</p>
          </div>
          <div className="delete-box2" onClick={onClickDelete}>
            <svg
              className="delete_svg"
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
            openMenuDelete === true ? { display: "none" } : { display: "flex" }
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
          <div className="shoppingcart__summ1">{count * price}</div>
          <div className="shoppingcart__summ2">
            {(count * price * 0.9).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
