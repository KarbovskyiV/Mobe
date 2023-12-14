import { useRef } from "react";
import { register } from "swiper/element/bundle";
import { useSelector, useDispatch } from "react-redux";

import srcPlus from "../../../assets/img/stacker.png";
import slides from "../../../assets/cartSlides.json";
import "./style.scss";
import Button from "../../Button.jsx";
import { addItem } from "../../../redux/slices/cartAdd";

register();

const Slider = ({
  id,
  idPlus,
  title,
  titlePlus,
  price,
  pricePlus,
  count,
  img,
}) => {
  const dispatch = useDispatch();

  const swiperElRef = useRef(null);

  const { items } = useSelector((state) => state.cartAdd);

  let resultArray = items.map((obj1, i) => {
    let matchingObj = slides.find((obj2, a) => i === a);
    return { ...obj1, ...matchingObj };
  });

  const addIntoCart = () => {
    addIntoCart1();
    addIntoCart2();
  };

  const addIntoCart1 = () => {
    const itemCart = {
      id: id,
      title: title,
      price: price,
      img: <img src={img} alt="img" />,
    };

    console.log(itemCart, "itemCart");
    dispatch(addItem(itemCart));
  };

  const addIntoCart2 = () => {
    const itemCart2 = {
      id: idPlus,
      title: titlePlus,
      price: pricePlus,
      img: <img src={srcPlus} alt="img" />,
    };
    console.log(itemCart2, "itemCart2");
    dispatch(addItem(itemCart2));
  };

  const slidesRender = resultArray.map((obj, i) => {
    console.log(obj, i);
    return (
      <swiper-slide key={i}>
        <div className="swiper__box">
          <div className="slide__box1">
            <img src={img} alt="img" />
            <div className="slide__title">
              <p>{obj.title}</p>

              <span>$ {obj.price}</span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 5V19M5 12H19"
              stroke="#28003E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="slide__box2">
            <img src={obj.srcPlus} alt="img" />
            <div className="slide__title">
              <p>{obj.titlePlus}</p>
              <span>$ {obj.pricePlus}</span>
            </div>
          </div>
        </div>
        <div className="shoppingcart__down-summ2">
          <h5>$ {obj.price + obj.pricePlus}</h5>
          <Button onClick={addIntoCart} type="violet" title="Add to order" />
        </div>
      </swiper-slide>
    );
  });

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        autoplay="false"
        loop="true"
        class="slider1"
      >
        {slidesRender}
      </swiper-container>
    </>
  );
};

export default Slider;
