import React from "react";
import Slider from "../components/Sliders/Slider";
import LogosBlock from "../components/LogosBlock/LogosBlock";
import ProductCart from "../components/ProductCart/index.jsx";
import styles from "./MenuNav.module.scss";
import cn from "classnames";
import { CatalogOpenedContext } from "../App";

const Home = () => {
  const { catalogOpened, setCatalogOpened } =
    React.useContext(CatalogOpenedContext);

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
              <li>
                <a href="##">Apple phones</a>
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
                  <li>
                    <a href="##">iPhone 14 Pro Max</a>
                  </li>
                  <li>
                    <a href="##">iPhone 14 Pro</a>
                  </li>
                  <li>
                    <a href="##">iPhone 14 Plus</a>
                  </li>
                  <li>
                    <a href="##">iPhone 14</a>
                  </li>
                  <li>
                    <a href="##">iPhone 13</a>
                  </li>
                  <li>
                    <a href="##">Look all</a>
                  </li>
                </ul>
              </li>
              <li>
                Samsung phones
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
                  <li>
                    <a href="##">Galaxy Fold5 | Flip5</a>
                  </li>
                  <li>
                    <a href="##">Galaxy S23 Ultra | S23+ | S23</a>
                  </li>
                  <li>
                    <a href="##">Galaxy S22 | S21FE</a>
                  </li>
                  <li>
                    <a href="##">Galaxy A54 | A34</a>
                  </li>
                  <li>
                    <a href="##">Galaxy A24 | A14</a>
                  </li>
                  <li>
                    <a href="##">Look all</a>
                  </li>
                </ul>
              </li>
              <li>
                Xiaomi phones
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
              </li>
              <li>
                Motorola phones
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
              </li>
              <li>
                Nokia phones
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
              </li>
              <li>
                Phones’ accessories
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
              </li>
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
