import React from "react";

import Button from "../components/Button";
import { DesktopContext, MobileContext } from "../App";
import { useSelector } from "react-redux";

import BuyWithUs from "../components/BuyWithUs";
import SwiperSlider1 from "../components/Sliders/SliderProductCard/SwiperSlider1/SwiperSlider1.jsx";
import SwiperSlider2 from "../components/Sliders/SliderProductCard/SwiperSlider2/SwiperSlider2.jsx";

function ProductCard() {
  const { desktop } = React.useContext(DesktopContext);
  const { mobile } = React.useContext(MobileContext);

  const nameProduct = useSelector((state) => state.cardReducer.name);

  const categoryProduct = useSelector((state) => state.cardReducer.category);

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

  return (
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
          <a href="##">{nameProduct}</a>
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
        {!mobile ? (
          <h5 style={!desktop ? { marginBottom: 40 } : { display: "none" }}>
            Apple iPhone 14 Pro 128GB Silver
          </h5>
        ) : (
          <h6 className="h6">Apple iPhone 14 Pro 128GB Silver</h6>
        )}
        <div
          style={about ? { display: "flex" } : { display: "none" }}
          className="productCard__cardBox"
        >
          <div className="productCard__card1">
            {!mobile ? <SwiperSlider1 /> : <SwiperSlider2 />}
          </div>
          <div className="productCard__cardPart3">
            <h5 style={desktop ? { display: "flex" } : { display: "none" }}>
              Apple iPhone 14 Pro 128GB Silver
            </h5>
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
        <div
          style={characteristics ? { display: "flex" } : { display: "none" }}
          className="productCard__cardBox"
        >
          <table border="1">
            <tr>
              <th className="part1"></th>
              <th className="part2"></th>
            </tr>
            <tr>
              <td>Display diagonal </td>
              <td>6.1</td>
            </tr>
            <tr>
              <td>Matrix type</td>
              <td>OLED (Super Retina XDR)</td>
            </tr>
            <tr>
              <td>Screen refresh rate</td>
              <td>120 Hz</td>
            </tr>
            <tr>
              <td>Screen material</td>
              <td>Ceramic Shield</td>
            </tr>
            <tr>
              <td>Communication standard</td>
              <td>2G (GPRS/EDGE) 3G (WCDMA/UMTS/HSPA) 4G (LTE) 5G</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>SIM card dimensions</td>
              <td>Nano-SIM</td>
            </tr>
            <tr>
              <td>Built-in memory</td>
              <td>128 GB</td>
            </tr>
            <tr>
              <td>Operating System </td>
              <td>iOS</td>
            </tr>
            <tr>
              <td>Front camera </td>
              <td>12 Мp</td>
            </tr>
            <tr>
              <td>Features of the front camera</td>
              <td>
                Auto focus Single Support for shooting 4K Stabilization Front
                flash
              </td>
            </tr>
            <tr>
              <td>Placement of the front camera</td>
              <td>Cut out</td>
            </tr>
            <tr>
              <td>Type of frontal flash</td>
              <td>Program</td>
            </tr>
            <tr>
              <td>Front camera video recording </td>
              <td>4K/3840x2160/stereo sound</td>
            </tr>
            <tr>
              <td>Additionally</td>
              <td>
                Aperture ƒ/1.9 / Autofocus with Focus Pixels / Six-element lens
                / Flash Retina Flash / Photonic Engine / Deep Fusion technology
                / Smart HDR 4 / Portrait mode with advanced bokeh and depth
                control / Portrait lighting with six effects (natural, studio,
                contour, scene , stage mono, high-quality mono) / Animoji and
                Memoji / Night mode / Photo styles / Apple ProRAW / Wide color
                capture for photos and Live Photos / Lens correction / Automatic
                image stabilization / Burst mode / 4K video recording at 24 fps
                / s, 25 fps, 30 fps or 60 fps / 1080p HD video recording at 25,
                30 or 60 fps / Cinema mode up to 4K HDR at 30 fps / HDR
                recording -video with Dolby Vision up to 4K at 60 frames per
                second / ProRes video recording / Support for 1080p slow-motion
                video at 120 fps / Frame-by-frame video with stabilization /
                Night mode / Slow motion / QuickTake video / Cinematic video
                stabilization (4K, 1080p and 720p)
              </td>
            </tr>
            <tr>
              <td>Name of the processor</td>
              <td>Apple A16 Bionic</td>
            </tr>
            <tr>
              <td>Number of cores</td>
              <td>2+4</td>
            </tr>
            <tr>
              <td>Apple series </td>
              <td>Apple Ax Series</td>
            </tr>
            <tr>
              <td>Main camera</td>
              <td>48 Mp + 12 Мp + 12 Мp + 12 Мp</td>
            </tr>
            <tr>
              <td>Features of the main camera</td>
              <td>
                Auto focus Support for shooting 4K Flash Stabilization Telephoto
                lens Ultra wide angle lens
              </td>
            </tr>
            <tr>
              <td>Number of main cameras</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Record video of the main camera</td>
              <td>4K/3840x2160/stereo sound</td>
            </tr>
            <tr>
              <td>Additional information on the camera</td>
              <td>
                Quad camera: Primary 48 MP: 24 mm, aperture ƒ/1.78, optical
                image stabilization with second-generation sensor shift,
                seven-element lens, 100% Focus Pixels; Ultra-wide-angle 12 MP:
                13 mm, ƒ/2.2 aperture and 120° viewing angle, six-element lens,
                100% Focus Pixels; 2x telephoto lens: - Telephoto 12 MP 2x
                (provided by a four-pixel sensor): 48 mm, aperture ƒ/1.78,
                optical image stabilization with second-generation sensor shift,
                seven-element lens, 100% Focus Pixels; - Telephoto 12 MP 3x: 77
                mm, aperture ƒ/2.8, optical image stabilization, six-element
                lens; 3x optical zoom, 2x optical zoom; 6-fold optical zoom
                range; digital magnification up to 15x; Sapphire glass lens cap
                / True Tone adaptive flash / Photonic Engine / Deep Fusion
                technology / Smart HDR 4 / Portrait mode with advanced bokeh and
                depth control / Portrait lighting with six effects (natural,
                studio, contour, scene, scene mono, high-quality mono) / Night
                mode / Portraits in night mode with LiDAR scanner / Panorama (up
                to 63 MP) / Photo styles / Macro photography / Apple ProRAW
                format / Wide color capture for photos and Live Photos / Lens
                correction (Ultra Wide) / Advanced red-eye correction /
                Automatic image stabilization / Burst shooting mode / Photo
                geotagging / Captured image formats: HEIF, JPEG and DNG
              </td>
            </tr>
            <tr>
              <td>Video recording</td>
              <td>
                4K video recording at 24 fps, 25 fps, 30 fps or 60 fps; 1080p HD
                video recording at 25, 30 or 60 frames per second; 720p HD video
                recording at a speed of 30 frames per second; Cinematic mode up
                to 4K HDR at 30 fps; Action mode up to 2.8K at 60 frames per
                second; HDR video recording with Dolby Vision up to 4K at a
                speed of 60 frames per second; ProRes video recording Macro
                video recording, including slow-motion and time-lapse; Support
                for slow-motion 1080p video at 120 or 240 fps. Single-frame
                video with stabilization / Night mode / Slow-motion shooting /
                QuickTake video / Optical image stabilization with
                second-generation sensor shift for video (primary) / Dual
                optical image stabilization for video (primary and telephoto) /
                3x optical zoom, 2x optical magnification; 6x optical zoom range
                / Digital zoom up to 9x / Audio zoom / True Tone flash /
                Cinematic video stabilization (4K, 1080p and 720p) / Continuous
                video with autofocus / Take 8MP photos while recording 4K video
                / Playback zoom / Recorded video formats: HEVC, H.264 and ProRes
                / Stereo recording
              </td>
            </tr>
            <tr>
              <td>Stabilization method</td>
              <td>Optical</td>
            </tr>
            <tr>
              <td>Body material</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Connectors</td>
              <td>Lightning</td>
            </tr>
            <tr>
              <td>Navigation</td>
              <td>A-GPS BDS GPS GLONASS Digital compass</td>
            </tr>
            <tr>
              <td>Weight, g</td>
              <td>206</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>71.5*147.5*7.85 mm</td>
            </tr>
            <tr>
              <td>Security</td>
              <td>Face unlock</td>
            </tr>
            <tr>
              <td>Degree of dust/moisture protection</td>
              <td>IP68</td>
            </tr>
            <tr>
              <td>Sensors</td>
              <td>
                Accelerometer Barometer Gyroscope Proximity sensor Light sensor
                LiDAR scanner
              </td>
            </tr>
            <tr>
              <td>Supply set </td>
              <td>Documentation Synchronization cable Phone</td>
            </tr>
            <tr>
              <td>Wireless technologies</td>
              <td>Bluetooth 5.3 NFC Wi-Fi Wireless charging</td>
            </tr>
            <tr>
              <td>Equipment</td>
              <td>e-SIM support Fast charging</td>
            </tr>
            <tr>
              <td>Form factor</td>
              <td>Monobloc</td>
            </tr>
            <tr>
              <td>Features of the case</td>
              <td>Frameless display Waterproof</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Silver</td>
            </tr>
            <tr>
              <td>Brand registration country</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>Warranty</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td>Country-producer of the product</td>
              <td>China</td>
            </tr>
          </table>
        </div>

        <BuyWithUs />
      </div>
    </div>
  );
}

export default ProductCard;
