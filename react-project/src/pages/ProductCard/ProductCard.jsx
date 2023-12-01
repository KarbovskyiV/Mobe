import React from "react";

import { useParams } from "react-router-dom";


import Button from "../../components/Button.jsx";
import { DesktopContext, MobileContext } from "../../App.js";
import { useSelector } from "react-redux";

import BuyWithUs from "../../components/BuyWithUs/index.jsx";
import SwiperSlider1 from "../../components/Sliders/SliderProductCard/SwiperSlider1/SwiperSlider1.jsx";
import SwiperSlider2 from "../../components/Sliders/SliderProductCard/SwiperSlider2/SwiperSlider2.jsx";
import "./style.scss";
import ProductCardBox from "../../components/ProductCardBox";

function ProductCard() {
  const { id } = useParams();
  const { desktop } = React.useContext(DesktopContext);
  const { mobile } = React.useContext(MobileContext);

  const categoryProduct = useSelector((state) => state.cardReducer.category);

  const characteristic = useSelector(
    (state) => state.cardReducer.characteristics
  );

  console.log(characteristic, "characteristics2");

  const [about, setAbout] = React.useState(true);
  const [characteristics, setCharacteristics] = React.useState(false);
  const [reviews, setReviews] = React.useState(false);

  function onClickAbout() {
    setAbout(true);
    setCharacteristics(false);
    setReviews(false);
  }

  function onClickChangeCharacteristics() {
    setAbout(false);
    setCharacteristics(true);
    setReviews(false);
  }

  function onClickChangeReviews() {
    setAbout(false);
    setCharacteristics(false);
    setReviews(true);
  }

  const title = () => {
    return `${
      characteristic.name === null || undefined
        ? "no data"
        : characteristic.name
    } ${
      characteristic.name === null ? "no data" : characteristic.built_in_memory
    } ${characteristic.color === null ? "no data" : characteristic.color}`;
  };

  const titleProduct = () => {
    return (
      <>
        {!mobile ? (
          <h5 style={!desktop ? { marginBottom: 40 } : { display: "none" }}>
            {title()}
          </h5>
        ) : (
          <h6 className="h6">{title()}</h6>
        )}
      </>
    );
  };

  const titleProduct2 = () => {
    return (
      <>
        <h5 style={desktop ? { display: "flex" } : { display: "none" }}>
          {title()}
        </h5>
      </>
    );
  };

  return (
    <>
      <div className="productCard">
        <div className="productCard__container">
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
            <a href="##">{categoryProduct}</a>
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
            <a href="##">{characteristic.name}</a>
          </div>
          <div className="productCard__menu">
            <a
              onClick={onClickAbout}
              className={about ? "unterline" : ""}
              href="##"
            >
              About
            </a>
            <a
              onClick={onClickChangeCharacteristics}
              className={characteristics ? "unterline" : ""}
              href="##"
            >
              Characteristics
            </a>
            <a
              onClick={onClickChangeReviews}
              className={reviews ? "unterline" : ""}
              href="##"
            >
              Reviews
            </a>
          </div>
          {about ? titleProduct() : ""}
          <div
            style={about ? { display: "flex" } : { display: "none" }}
            className="productCard__cardBox"
          >
            <div className="productCard__card1">
              {!mobile ? <SwiperSlider1 /> : <SwiperSlider2 />}
            </div>
            <div className="productCard__cardPart3">
              {about ? titleProduct2() : ""}
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
          <div className="productCard__titleBox">
            {characteristics || reviews ? title() : ""}
          </div>
          <div
            style={characteristics ? { display: "flex" } : { display: "none" }}
            className={
              characteristics || reviews
                ? "productCard__cardBox2"
                : "productCard__cardBox"
            }
          >
            {characteristics && desktop ? (
              <div className="productCard__absoluteDesktop">
                <ProductCardBox />
              </div>
            ) : (
              ""
            )}
            <table border="1">
              <tbody>
                <tr>
                  <th className="part1"></th>
                  <th className="part2"></th>
                </tr>
                <tr>
                  <td>
                    <span>Display diagonal</span>
                  </td>
                  <td>
                    {!characteristic.display_diagonal
                      ? "-"
                      : characteristic.display_diagonal}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Display resolution</span>
                  </td>
                  <td>
                    {!characteristic.display_resolution
                      ? "-"
                      : characteristic.display_resolution}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Matrix type</span>
                  </td>
                  <td>
                    {!characteristic.matrix_type
                      ? "-"
                      : characteristic.matrix_type}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Screen refresh rate</span>
                  </td>
                  <td>
                    {!characteristic.screen_refresh_rate
                      ? "-"
                      : characteristic.screen_refresh_rate}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Screen material</span>
                  </td>
                  <td>
                    {!characteristic.screen_material
                      ? "-"
                      : characteristic.screen_material}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Communication standard</span>
                  </td>
                  <td>
                    {!characteristic.communication_standard
                      ? "-"
                      : characteristic.communication_standard}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span>SIM card dimensions</span>
                  </td>
                  <td>
                    {!characteristic.sim_card_dimensions
                      ? "-"
                      : characteristic.sim_card_dimensions}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Built-in memory</span>
                  </td>
                  <td>
                    {!characteristic.built_in_memory
                      ? "-"
                      : characteristic.built_in_memory}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Operating System</span>
                  </td>
                  <td>
                    {!characteristic.operating_system
                      ? "-"
                      : characteristic.operating_system}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Front camera</span>
                  </td>
                  <td>
                    {!characteristic.front_camera
                      ? "-"
                      : characteristic.front_camera}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Features of the front camera</span>
                  </td>
                  <td>
                    {!characteristic.features_of_the_front_camera
                      ? "-"
                      : characteristic.features_of_the_front_camera}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Placement of the front camera</span>
                  </td>
                  <td>
                    {!characteristic.placement_of_the_front_camera
                      ? "-"
                      : characteristic.placement_of_the_front_camera}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Type of frontal flash</span>
                  </td>
                  <td>
                    {!characteristic.type_of_frontal_flash
                      ? "-"
                      : characteristic.type_of_frontal_flash}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Front camera video recording</span>
                  </td>
                  <td>
                    {!characteristic.front_camera_video_recording
                      ? "-"
                      : characteristic.front_camera_video_recording}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Additionally</span>
                  </td>
                  <td>
                    {!characteristic.additionally
                      ? "-"
                      : characteristic.additionally}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Name of the processor</span>
                  </td>
                  <td>Apple A16 Bionic</td>
                </tr>
                <tr>
                  <td>
                    <span>Number of cores</span>
                  </td>
                  <td>2+4</td>
                </tr>
                <tr>
                  <td>
                    <span>Apple series</span>
                  </td>
                  <td>Apple Ax Series</td>
                </tr>
                <tr>
                  <td>
                    <span>Main camera</span>
                  </td>
                  <td>48 Mp + 12 Мp + 12 Мp + 12 Мp</td>
                </tr>
                <tr>
                  <td>
                    <span>Features of the main camera</span>
                  </td>
                  <td>
                    Auto focus Support for shooting 4K Flash Stabilization
                    Telephoto lens Ultra wide angle lens
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Number of main cameras</span>
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <span>Record video of the main camera</span>
                  </td>
                  <td>4K/3840x2160/stereo sound</td>
                </tr>
                <tr>
                  <td>
                    <span>Additional information on the camera</span>
                  </td>
                  <td>formats: HEIF, JPEG and DNG</td>
                </tr>
                <tr>
                  <td>
                    <span>Video recording</span>
                  </td>
                  <td>Stereo recording</td>
                </tr>
                <tr>
                  <td>
                    <span>Stabilization method</span>
                  </td>
                  <td>Optical</td>
                </tr>
                <tr>
                  <td>
                    <span>Body material</span>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <span>Connectors</span>
                  </td>
                  <td>Lightning</td>
                </tr>
                <tr>
                  <td>
                    <span>Navigation</span>
                  </td>
                  <td>A-GPS BDS GPS GLONASS Digital compass</td>
                </tr>
                <tr>
                  <td>
                    <span>Weight, g</span>
                  </td>
                  <td>206</td>
                </tr>
                <tr>
                  <td>
                    <span>Dimensions</span>
                  </td>
                  <td>71.5*147.5*7.85 mm</td>
                </tr>
                <tr>
                  <td>
                    <span>Security</span>
                  </td>
                  <td>Face unlock</td>
                </tr>
                <tr>
                  <td>
                    <span>Degree of dust/moisture protection</span>
                  </td>
                  <td>IP68</td>
                </tr>
                <tr>
                  <td>
                    <span>Sensors</span>
                  </td>
                  <td>
                    Accelerometer Barometer Gyroscope Proximity sensor Light
                    sensor LiDAR scanner
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Supply set</span>
                  </td>
                  <td>Documentation Synchronization cable Phone</td>
                </tr>
                <tr>
                  <td>
                    <span>Wireless technologies</span>
                  </td>
                  <td>Bluetooth 5.3 NFC Wi-Fi Wireless charging</td>
                </tr>
                <tr>
                  <td>
                    <span>Equipment</span>
                  </td>
                  <td>e-SIM support Fast charging</td>
                </tr>
                <tr>
                  <td>
                    <span>Form factor</span>
                  </td>
                  <td>Monobloc</td>
                </tr>
                <tr>
                  <td>
                    <span>Features of the case</span>
                  </td>
                  <td>Frameless display Waterproof</td>
                </tr>
                <tr>
                  <td>
                    <span>Color</span>
                  </td>
                  <td>Silver</td>
                </tr>
                <tr>
                  <td>
                    <span>Brand registration country</span>
                  </td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>
                    <span>Warranty</span>
                  </td>
                  <td>12 months</td>
                </tr>
                <tr>
                  <td>
                    <span>Country-producer of the product</span>
                  </td>
                  <td>China</td>
                </tr>
              </tbody>
            </table>
          </div>
          <BuyWithUs />
        </div>
      </div>

      {characteristics && !desktop ? (
        <div className="productCard__absoluteMobileTablet">
          <ProductCardBox />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductCard;
