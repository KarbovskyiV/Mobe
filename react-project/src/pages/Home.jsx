import React from "react";
import Slider from "../components/Sliders/Slider";
import LogosBlock from "../components/LogosBlock/LogosBlock";
import ProductCart from "../components/ProductCart/index.jsx";
import styles from "./MenuNav.module.scss";
import cn from "classnames";
import {
  CatalogOpenedContext,
  GetCatalogContext,
  ProductsOpenedContext,
  MobileContext,
} from "../App";
import axios from "../utils/axios.js";
import Promotions from "../components/Promotions/Promotions";
import New from "../components/New/New";
import Popular from "../components/Popular/Popular";
import Subscribe from "../components/Subscribe/Subscribe";


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
    if (!mobile) {
      setProductsOpened(true);
      getProducts();
    }
    return;
  };

  const handleMouseLeave = () => {
    if (!mobile) {
      setProductsOpened(true);
      getProducts();
    }
    return;
  };

  const clickIconsOpened = () => {
    if (mobile) {
      setProductsOpened(true);
      getProducts();
    }
    return;
  };

  const clickIconsClosed = () => {
    if (mobile) {
      setProductsOpened(false);
    }
    return;
  };

  const category_1 = cat_1;

  return (
    <div className="home">
      <div className="home__slider-logos">
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
              className={styles.mobileMenuTitle}
              style={mobile ? { display: "flex" } : { display: "none" }}
            >
              <p>Catalog of goods</p>
              {!menuCatalogMobileOpened === true ? (
                <svg
                  onClick={() => setMenuCatalogMobileOpened(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#30293D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setMenuCatalogMobileOpened(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="#30293D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                  /*  style={
                    obj.id === 1 ? { marginBottom: 304 } : { marginBottom: 0 }
                  } */
                >
                  <a href="##">{obj.name}</a>
                  {mobile ? (
                    productsOpened ? (
                      <svg
                        onClick={() => clickIconsClosed()}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 15L12 9L6 15"
                          stroke="#FDFDFD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={() => clickIconsOpened()}
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
                    )
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
                          ? { visibility: "visible" }
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
          </div>
        </nav>

        <Slider />
        <LogosBlock />
      </div>
      {/* <ProductCart /> */}
      <Promotions />
      <New />
      <Popular />
      <Subscribe/>
      
    </div>
  );
};

export default Home;
