import React from "react";
import Slider from "../components/Sliders/SliderHome/Slider.jsx";
import LogosBlock from "../components/LogosBlock/LogosBlock.jsx";
import styles from "./MenuNav.module.scss";
import cn from "classnames";
import {
  CatalogOpenedContext,
  GetCatalogContext,
  ProductsOpenedContext,
  MobileContext,
} from "../App.js";
import axios from "../utils/axios.js";

import PromotionContainer from "../Containers/Promotions/PromotionContainer.jsx"
import NewContainer from "../Containers/New/NewContainer.jsx"
import PopularContainer from "../Containers/Popular/PopularContainer.jsx"

import Subscribe from "../components/Subscribe/Subscribe.jsx";
import IconClose from "../components/IconsClose/IconClose.jsx";
import IconOpen from "../components/IconsClose/IconOpen.jsx";

const Home = () => {
  const { catalogOpened, setCatalogOpened } =
    React.useContext(CatalogOpenedContext);
  const { productsOpened, setProductsOpened } = React.useContext(
    ProductsOpenedContext
  );

  const { category } = React.useContext(GetCatalogContext);
  const [cat_1, setCat_1] = React.useState([]);

  const { mobile } = React.useContext(MobileContext);

  const [menuCatalogMobileOpened, setMenuCatalogMobileOpened] = React.useState(
    mobile ? false : true
  );

  const catalogList = category;

  const getProducts = () => {
    axios.get("/products").then((arr) => {
      setCat_1(arr.data);
    });
  };

  const boxRef = React.createRef();

  const handleMouseEnter = () => {
    setProductsOpened(true);
    getProducts();
  };

  const handleMouseLeave = () => {
    setProductsOpened(true);
    getProducts();
  };

  const category_1 = cat_1;

  const a = (x) => {
    return 142 + x * 42 + x * 6;
  };

  return (
    <div className="home">
      <div className="home__slider-logos">
        <div className="home__container2">
          <nav className={styles.menu} role="navigation">
            <div
              onClick={() => setCatalogOpened(false)}
              className={cn(styles.cover, {
                [styles.coverShow]: catalogOpened,
              })}
            />
            <div
              className={cn(styles.mobileMenuBox, {
                [styles.mobileMenuBoxShow]: catalogOpened,
              })}
            >
              <div
                onClick={() =>
                  setMenuCatalogMobileOpened(!menuCatalogMobileOpened)
                }
                className={styles.mobileMenuTitle}
                style={mobile ? { display: "flex" } : { display: "none" }}
              >
                <p>Catalog of goods</p>
                {!menuCatalogMobileOpened === true ? (
                  <IconClose />
                ) : (
                  <IconOpen />
                )}
              </div>
              <ul
                style={
                  menuCatalogMobileOpened
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                {catalogList.map((obj, i) => (
                  <li
                    ref={boxRef}
                    key={i}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                  >
                    <a href="##">{obj.name}</a>
                    {mobile ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="#FDFDFD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="#FDFDFD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <ul
                      style={
                        mobile
                          ? productsOpened
                            ? {
                                visibility: "visible",
                                top: a(obj.id),
                                height: 304,
                              }
                            : { visibility: "hidden" }
                          : { width: 300 }
                      }
                    >
                      {category_1
                        .filter((cat) => cat.category_id === obj.id)
                        .map((object, i) => (
                          <li key={i}>
                            <a href="##">{object.name}</a>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <div
                className={styles.mobileMenuFooter}
                style={mobile ? { display: "flex" } : { display: "none" }}
              >
                <a href="##">Contacts</a>
                <a href="##">Delivery and payment</a>
                <a href="##">Returns and exchanges</a>
                <a href="##">Privacy Policy</a>
                <a href="##">Security Policy</a>
                <a href="##">Terms of use</a>
              </div>
            </div>
          </nav>
        </div>

        <Slider />
        <LogosBlock />
      </div>
      <PromotionContainer />
      <NewContainer />
      <PopularContainer/>

      <Subscribe />
    </div>
  );
};

export default Home;
