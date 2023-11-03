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
} from "../App";
import axios from "../utils/axios.js";

const Home = () => {
  const { catalogOpened, setCatalogOpened } =
    React.useContext(CatalogOpenedContext);
  const { productsOpened, setProductsOpened } = React.useContext(
    ProductsOpenedContext
  );

  const { category } = React.useContext(GetCatalogContext);
  const [cat_1, setCat_1] = React.useState([]);

  const catalogList = category;

  const getProducts = () => {
    axios.get("/products?").then((arr) => {
      setCat_1(arr.data.data);
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

  console.log(category_1);

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
            <ul>
              {catalogList.map((obj, i) => (
                <li
                  ref={boxRef}
                  key={i}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                >
                  <a href="##">{obj.name}</a>
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
                  <ul>
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
      <ProductCart />
    </div>
  );
};

export default Home;
