import React from "react";
import slide1 from "../assets/img/slideProduct/image1.jpg";
import slide2 from "../assets/img/slideProduct/image2.jpg";
import slide3 from "../assets/img/slideProduct/image3.jpg";
import slide4 from "../assets/img/slideProduct/image4.jpg";
import slide5 from "../assets/img/slideProduct/image5.jpg";
import slideBig1 from "../assets/img/slideProduct/imageBig1.jpg";
import slideBig1Tablet from "../assets/img/slideProduct/imageBig1Tablet.jpg";
import slideBig1Mobile from "../assets/img/slideProduct/imageBig1Mobile.jpg";

import Button from "../components/Button";
import { DesktopContext, MobileContext, TabletContext } from "../App";

function ProductCard() {
  const { desktop } = React.useContext(DesktopContext);
  const { mobile } = React.useContext(MobileContext);
  const { tablet } = React.useContext(TabletContext);

  /* const fotoVersion = () => {
    if (desktop) {
      return slideBig1;
    } else if (mobile) {
      return slideBig1Mobile;
    } else {
      return slideBig1Tablet;
    }
  }; */
  return (
    <div className="productCard">
      <div className="productCard__titlemenu">
        <a href="##">Main</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 16L14 12L10 8"
            stroke="#30293D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a href="##">Apple phones</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 16L14 12L10 8"
            stroke="#30293D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a href="##">Apple iPhone 14 Pro</a>
      </div>
      <div className="productCard__menu">
        <a href="##">About</a>
        <a href="##">Characteristics</a>
        <a href="##">Reviews</a>
      </div>
      <div className="productCard__cardBox">
        <div className="productCard__card1">
          <div className="productCard__cardPart1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="#28003E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="productCard__cardSlideAbout">
              <img src={slide1} alt="slide1" />
              <img src={slide2} alt="slide2" />
              <img src={slide3} alt="slide3" />
              <img src={slide4} alt="slide4" />
              <img src={slide5} alt="slide5" />
            </div>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="productCard__cardPart2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#28003E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <img src={slideBig1} alt="slide5" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#28003E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="productCard__cardPart3">
          <h5>Apple iPhone 14 Pro 128GB Silver</h5>
          <div className="productCard__cardBlock1">
            <div className="productCard__cardBlock11">
              <p>
                Color: <span>Silver</span>
              </p>
              <div
                style={!desktop ? { display: "flex" } : { display: "none" }}
                className="productCard__cardBlockLeft"
              >
                <div className="productCard__cardBlockLeft-tip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                      stroke="#28003E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Favorite</p>
                </div>
                <div className="productCard__cardBlockLeft-tip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.4195 1.95312V9.54544M2.21387 12.389L22.3183 6.7874"
                      stroke="#28003E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.38672 17.9712L6.30018 11.3721L10.3863 17.9712H2.38672Z"
                      stroke="#28003E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.36719 18.0098C2.50147 19.3398 3.48751 22 6.35738 22C9.22725 22 10.1302 19.3398 10.3859 18.0098"
                      stroke="#28003E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.8174 14.5186L18.7308 7.91943L22.8169 14.5186H14.8174Z"
                      stroke="#28003E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.7988 14.5566C14.9331 15.8867 15.9192 18.5468 18.789 18.5468C21.6589 18.5468 22.5618 15.8867 22.8176 14.5566"
                      stroke="#28003E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Compare</p>
                </div>
              </div>
            </div>
            <div className="productCard__colors">
              <div className="productCard__color1"></div>
              <div className="productCard__color2"></div>
              <div className="productCard__color3"></div>
              <div className="productCard__color4"></div>
            </div>

            <p>
              Series: <span>iPhone 14 Pro</span>
            </p>
            <div className="productCard__buttons">
              <button>
                <span>iPhone 14 Pro Max</span>
              </button>
              <button>iPhone 14 Pro</button>
              <button>iPhone 14</button>
            </div>
            <p>
              Internal memory: <span>256 GB</span>
            </p>
            <div className="productCard__buttons">
              <button>
                <span>128 GB</span>
              </button>
              <button>256 GB</button>
              <button>512 GB</button>
              <button>1 TB</button>
            </div>
          </div>

          <div className="productCard__cardBlock2">
            <div
              style={desktop ? { display: "flex" } : { display: "none" }}
              className="productCard__cardBlockLeft"
            >
              <div className="productCard__cardBlockLeft-tip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                    stroke="#28003E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Favorite</p>
              </div>
              <div className="productCard__cardBlockLeft-tip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.4195 1.95312V9.54544M2.21387 12.389L22.3183 6.7874"
                    stroke="#28003E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.38672 17.9712L6.30018 11.3721L10.3863 17.9712H2.38672Z"
                    stroke="#28003E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.36719 18.0098C2.50147 19.3398 3.48751 22 6.35738 22C9.22725 22 10.1302 19.3398 10.3859 18.0098"
                    stroke="#28003E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.8174 14.5186L18.7308 7.91943L22.8169 14.5186H14.8174Z"
                    stroke="#28003E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.7988 14.5566C14.9331 15.8867 15.9192 18.5468 18.789 18.5468C21.6589 18.5468 22.5618 15.8867 22.8176 14.5566"
                    stroke="#28003E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Compare</p>
              </div>
            </div>
            <div className="productCard__cardBlockRight">
              <div className="productCard__cardBlockPart1">
                <p>$ 1194</p>
                <h4>$ 1094</h4>
                <div className="productCard__cardBlockEconomy">
                  <p>Economy:</p>
                  <p>- $ 100</p>
                </div>
              </div>
              <div className="productCard__cardBlockPart2">
                <Button type="violet" title="Buy" />
                <Button type="black" title="Credit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
