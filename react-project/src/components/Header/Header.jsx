import React, { useEffect } from "react";
import Logo from "../Logo.jsx";
import { Link } from "react-router-dom";
import {
  SignInActiveContext,
  userContext,
  isLoggedInContext,
  SearchContext,
  totalCountShoppingCartContext,
  ShoppingCartActiveContext,
  DesktopContext,
  TabletContext,
  MobileContext,
  CatalogOpenedContext,
  GetCatalogContext,
} from "../../App.js";
import debounce from "lodash.debounce";
import axios from "../../utils/axios.js";
import IconsWeight from "../IconsWeight/IconsWeight.jsx";
import ComparePageLink from "../ComparePageLink/ComparePageLink.jsx";
import "./style.scss";

function Header() {
  const { setSignInActive } = React.useContext(SignInActiveContext);

  const { setUser } = React.useContext(userContext);
  const { isLoggedIn, setIsLoggedIn } = React.useContext(isLoggedInContext);
  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState("");
  const { totalCountShoppingCart } = React.useContext(
    totalCountShoppingCartContext
  );
  const { setShoppingCartActive } = React.useContext(ShoppingCartActiveContext);
  const { desktop } = React.useContext(DesktopContext);
  const { tablet } = React.useContext(TabletContext);
  const { mobile } = React.useContext(MobileContext);
  const { catalogOpened, setCatalogOpened } =
    React.useContext(CatalogOpenedContext);

  const { setCategory } = React.useContext(GetCatalogContext);
  const [openContacts, setOpenContacts] = React.useState(false);

  const logOutUser = () => {
    setUser({
      name: "",
      surname: "",
      phone: "",
      email: "",
      password: "",
      rememberMe: false,
    });
    localStorage.removeItem("user");

    setIsLoggedIn(false);
  };

  const onClickSignin = () => {
    setSignInActive(true);
  };

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  /* const getCatalog = () => {
    axios.get("/categories?").then((arr) => {
      setCategory(arr.data.data);
    });
  };

  useEffect(() => {
    if (catalogOpened) {
      getCatalog();
    }
  }, []); */

  return (
    <div className="header">
      <div className="header__light">
        <div className="header__container2">
          <div className="header__light2">
            {!catalogOpened === true ? (
              <svg
                onClick={() => setCatalogOpened(true)}
                style={mobile ? { display: "flex" } : { display: "none" }}
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
              >
                <path
                  d="M25 9H0.999999"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 1H0.999999"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 17H0.999999"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setCatalogOpened(false)}
                style={mobile ? { display: "flex" } : { display: "none" }}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M0.999756 17L16.9996 1.00013"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9998 17L0.999888 1.00013"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <Link to="/">
              <Logo />
            </Link>

            <div
              style={mobile ? { display: "none" } : { display: "flex" }}
              className="header__contactus"
            >
              <a href="##">Contact us</a>
              {!openContacts ? (
                <svg
                  onClick={() => setOpenContacts(true)}
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
              ) : (
                <svg
                  onClick={() => setOpenContacts(false)}
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
              )}
            </div>
            <div
              style={openContacts ? { display: "flex" } : { display: "none" }}
              className="header__contacts"
            >
              <div className="header__contacts-chat">
                <div className="header__contacts-round1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M3.5 9C3.35833 9 3.23958 8.95208 3.14375 8.85625C3.04792 8.76042 3 8.64167 3 8.5V7.5H9.5V3H10.5C10.6417 3 10.7604 3.04792 10.8562 3.14375C10.9521 3.23958 11 3.35833 11 3.5V11L9 9H3.5ZM1 8.5V1.5C1 1.35833 1.04792 1.23958 1.14375 1.14375C1.23958 1.04792 1.35833 1 1.5 1H8C8.14167 1 8.26042 1.04792 8.35625 1.14375C8.45208 1.23958 8.5 1.35833 8.5 1.5V6C8.5 6.14167 8.45208 6.26042 8.35625 6.35625C8.26042 6.45208 8.14167 6.5 8 6.5H3L1 8.5ZM7.5 5.5V2H2V5.5H7.5Z"
                      fill="#FDFDFD"
                    />
                  </svg>
                </div>
                <p>Chat on the site </p>
              </div>
              <div className="header__contacts-viber">
                <div className="header__contacts-round2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M3.19929 10.9063C3.19929 10.7051 3.19929 10.5039 3.19929 10.3027C3.20072 10.2945 3.20043 10.2861 3.19844 10.278C3.19645 10.2699 3.1928 10.2622 3.18772 10.2556C3.18264 10.2489 3.17623 10.2434 3.1689 10.2393C3.16157 10.2352 3.15346 10.2326 3.14509 10.2317C2.64185 10.0901 2.17738 9.83772 1.78627 9.49347C1.5013 9.23661 1.26403 8.9322 1.08527 8.59408C0.833293 8.10567 0.665603 7.57891 0.589145 7.03564C0.494413 6.35416 0.461513 5.66564 0.49084 4.97834C0.497271 4.65792 0.513808 4.34113 0.550558 4.0207C0.609167 3.41179 0.764189 2.81583 1.00993 2.25471C1.31337 1.56478 1.86386 1.0106 2.55525 0.698992C3.02623 0.485442 3.52172 0.329542 4.03075 0.234735C4.52995 0.141049 5.03537 0.0835478 5.543 0.0626872C6.00059 0.046654 6.45869 0.053338 6.9156 0.0827139C7.56955 0.110064 8.21758 0.217383 8.84496 0.402232C9.31012 0.535088 9.75263 0.736057 10.1578 0.998483C10.5527 1.26703 10.872 1.63074 11.0858 2.05535C11.3371 2.55127 11.5079 3.08336 11.592 3.632C11.6466 3.95773 11.6825 4.28628 11.6995 4.61604C11.7234 5.02477 11.7206 5.43532 11.705 5.84223C11.6894 6.24913 11.6545 6.64421 11.6039 7.04292C11.5401 7.64136 11.3544 8.22075 11.0582 8.74611C10.6727 9.41069 10.055 9.91256 9.32179 10.1571C8.82042 10.331 8.30273 10.4549 7.77647 10.5267C7.39151 10.5795 7.00564 10.6177 6.61793 10.6332C6.32118 10.6468 6.02442 10.6432 5.72767 10.6386C5.55954 10.6386 5.39233 10.6222 5.22512 10.6077C5.2087 10.6046 5.19174 10.6064 5.17637 10.6129C5.161 10.6194 5.14791 10.6302 5.13876 10.6441C4.80066 11.0465 4.4497 11.4379 4.09598 11.8275C4.03155 11.8986 3.95695 11.9599 3.87457 12.0096C3.82049 12.0447 3.75882 12.0668 3.69455 12.074C3.63027 12.0811 3.5652 12.0733 3.50457 12.0509C3.44394 12.0286 3.38946 11.9925 3.34553 11.9454C3.30159 11.8984 3.26944 11.8418 3.25166 11.7802C3.21665 11.6707 3.19929 11.5564 3.20021 11.4415C3.19929 11.2613 3.19929 11.0838 3.19929 10.9063ZM3.60813 11.67L3.65131 11.63L4.41846 10.7861C4.71368 10.4614 5.0086 10.1364 5.30321 9.81116C5.31769 9.79132 5.33723 9.77564 5.35983 9.76573C5.38242 9.75581 5.40727 9.75202 5.43183 9.75473C5.53198 9.76474 5.63212 9.76838 5.73318 9.76929C6.0823 9.76929 6.43143 9.76929 6.78055 9.74471C7.09751 9.72013 7.41356 9.6819 7.72777 9.63274C8.06607 9.57439 8.40097 9.49812 8.73104 9.40426C9.46603 9.20854 10.0347 8.7898 10.3921 8.11162C10.6031 7.69467 10.7354 7.24302 10.7826 6.77893C10.8384 6.34152 10.8719 5.90158 10.8827 5.46081C10.899 4.90711 10.8609 4.35315 10.7688 3.80678C10.705 3.41093 10.5901 3.02483 10.427 2.65797C10.2194 2.20282 9.9254 1.82595 9.47246 1.58381C8.77789 1.2124 8.02636 1.04673 7.25186 0.96207C7.03228 0.938402 6.8127 0.925658 6.59221 0.917465C6.14072 0.894403 5.68827 0.896834 5.23706 0.924748C4.91257 0.948609 4.58981 0.991775 4.27054 1.05401C3.80102 1.13881 3.34681 1.2922 2.92275 1.50916C2.67691 1.63225 2.45387 1.79568 2.26309 1.99254C1.95391 2.33494 1.72711 2.74235 1.59976 3.18413C1.44869 3.69864 1.36622 4.23053 1.35446 4.76624C1.3249 5.30196 1.33165 5.83903 1.37467 6.37385C1.40144 6.69212 1.45522 7.0076 1.53545 7.31692C1.65482 7.79896 1.88639 8.24664 2.21164 8.62412C2.56279 9.00925 3.01663 9.2882 3.52085 9.42884C3.58424 9.44795 3.61273 9.4698 3.61273 9.5408C3.60721 9.80297 3.61273 10.0651 3.61273 10.3273L3.60813 11.67Z"
                      fill="white"
                    />
                    <path
                      d="M2.96466 3.53934C2.95823 3.33998 3.06756 3.19524 3.19986 3.06507C3.37434 2.89945 3.56658 2.75324 3.77315 2.62903C3.86734 2.57147 3.97934 2.54954 4.08855 2.56727C4.19776 2.585 4.29684 2.64119 4.36758 2.72552C4.61751 2.98583 4.84121 3.26967 5.0355 3.57302C5.13172 3.70947 5.20437 3.86083 5.25049 4.02089C5.26892 4.08335 5.27012 4.14957 5.25396 4.21264C5.2378 4.27572 5.20488 4.33336 5.15861 4.37955C5.05262 4.48263 4.93966 4.57844 4.82052 4.6663C4.76048 4.7137 4.71585 4.77755 4.69216 4.8499C4.66847 4.92225 4.66678 4.99991 4.6873 5.0732C4.76088 5.41737 4.92762 5.7352 5.16964 5.99261C5.46372 6.34834 5.84263 6.62584 6.27213 6.80006C6.37767 6.85382 6.49859 6.8702 6.61482 6.84648C6.67848 6.82927 6.73505 6.79265 6.77652 6.7418C6.84083 6.66078 6.91066 6.58249 6.96854 6.49601C7.04361 6.38814 7.15823 6.31359 7.28798 6.28825C7.41773 6.26291 7.55234 6.28879 7.66311 6.36038C7.97453 6.53941 8.26856 6.74663 8.54142 6.97939C8.60573 7.034 8.6728 7.0868 8.73711 7.14233C8.81321 7.19983 8.86817 7.28048 8.89356 7.3719C8.91895 7.46333 8.91337 7.56048 8.87768 7.64846C8.82092 7.79641 8.73818 7.93325 8.6333 8.05264C8.50296 8.23213 8.33694 8.3833 8.14544 8.49687C8.0539 8.55013 7.95105 8.58141 7.84511 8.58821C7.73918 8.59501 7.63311 8.57713 7.5354 8.53601C6.79207 8.23949 6.09753 7.83481 5.47466 7.33532C4.86544 6.8384 4.33304 6.25568 3.89442 5.60573C3.52536 5.06769 3.23174 4.48247 3.02162 3.86614C2.99925 3.79159 2.98085 3.71593 2.9665 3.63947C2.96241 3.60624 2.9618 3.57269 2.96466 3.53934Z"
                      fill="white"
                    />
                    <path
                      d="M6.1367 2.5706C6.75862 2.582 7.35677 2.80929 7.82688 3.21287C8.29699 3.61645 8.60924 4.1707 8.70918 4.77901C8.74942 5.00017 8.77093 5.22428 8.77349 5.44899C8.77349 5.50179 8.75971 5.54002 8.70275 5.54549C8.64579 5.55095 8.63109 5.5027 8.63109 5.45446C8.63962 4.99992 8.54545 4.54924 8.35547 4.13542C8.19547 3.79539 7.95846 3.49652 7.66287 3.26206C7.36728 3.0276 7.02108 2.86387 6.6512 2.78362C6.45564 2.73876 6.25566 2.71555 6.05494 2.71443C6.03539 2.71477 6.0159 2.71231 5.99705 2.70715C5.98101 2.70267 5.96735 2.69219 5.95896 2.67793C5.95056 2.66366 5.94808 2.64673 5.95204 2.63068C5.95215 2.62307 5.9538 2.61556 5.95688 2.60859C5.95995 2.60162 5.9644 2.59532 5.96996 2.59007C5.97552 2.58481 5.98208 2.58071 5.98925 2.57799C5.99643 2.57528 6.00408 2.574 6.01175 2.57425C6.0531 2.56878 6.09536 2.5706 6.1367 2.5706Z"
                      fill="white"
                    />
                    <path
                      d="M7.91083 5.03934C7.90775 4.78645 7.84489 4.53779 7.7273 4.3133C7.60971 4.08882 7.44066 3.89477 7.23372 3.74671C6.99219 3.5786 6.7114 3.47428 6.41787 3.44358C6.36826 3.4372 6.31865 3.43447 6.26812 3.42901C6.21759 3.42355 6.18727 3.40261 6.19186 3.35164C6.19646 3.30066 6.22861 3.28245 6.28374 3.28609C7.09774 3.33525 7.79048 3.79131 8.00362 4.64063C8.04261 4.80439 8.06204 4.97213 8.0615 5.14039C8.0615 5.15586 8.0615 5.17134 8.0615 5.1859C8.0615 5.23142 8.0321 5.26146 7.98709 5.26055C7.9771 5.26022 7.96729 5.25787 7.95825 5.25366C7.94921 5.24944 7.94114 5.24344 7.93452 5.23603C7.9279 5.22862 7.92287 5.21995 7.91975 5.21055C7.91662 5.20115 7.91546 5.19121 7.91634 5.18135C7.90899 5.13857 7.91083 5.09487 7.91083 5.03934Z"
                      fill="white"
                    />
                    <path
                      d="M6.48425 4.02534C6.93076 4.05538 7.24222 4.27203 7.32766 4.74266C7.33802 4.80295 7.34538 4.86371 7.34971 4.92472C7.34971 4.97388 7.33868 5.01575 7.28448 5.01575C7.23027 5.01575 7.2119 4.97934 7.21006 4.92472C7.20955 4.74432 7.15346 4.56837 7.04928 4.42041C6.9398 4.2864 6.78262 4.19909 6.61012 4.17645C6.57155 4.1693 6.53259 4.16444 6.49344 4.16188C6.42913 4.16188 6.3933 4.13002 6.40157 4.08087C6.40984 4.03171 6.44842 4.02261 6.48425 4.02534Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>Viber</p>
              </div>
              <div className="header__contacts-telegram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="url(#paint0_linear_1167_774)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.43201 11.8734C8.93026 10.3493 11.263 9.34452 12.4301 8.85905C15.7627 7.47294 16.4551 7.23216 16.9065 7.22421C17.0058 7.22246 17.2277 7.24706 17.3715 7.36372C17.4929 7.46223 17.5263 7.5953 17.5423 7.6887C17.5583 7.78209 17.5782 7.99485 17.5623 8.1611C17.3817 10.0586 16.6003 14.6633 16.2028 16.7885C16.0346 17.6877 15.7034 17.9892 15.3827 18.0188C14.6858 18.0829 14.1567 17.5582 13.4817 17.1158C12.4256 16.4235 11.8289 15.9925 10.8037 15.3169C9.61896 14.5362 10.387 14.107 11.0622 13.4058C11.2389 13.2222 14.3093 10.4295 14.3687 10.1761C14.3762 10.1444 14.3831 10.0263 14.3129 9.96397C14.2427 9.9016 14.1392 9.92293 14.0644 9.93989C13.9585 9.96393 12.2713 11.0791 9.00276 13.2855C8.52385 13.6143 8.09007 13.7745 7.70141 13.7662C7.27295 13.7569 6.44876 13.5239 5.83606 13.3247C5.08456 13.0804 4.48728 12.9513 4.53929 12.5364C4.56638 12.3203 4.86395 12.0993 5.43201 11.8734Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1167_774"
                      x1="12"
                      y1="0"
                      x2="12"
                      y2="23.822"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2AABEE" />
                      <stop offset="1" stopColor="#229ED9" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>Telegram</p>
              </div>
              <div className="header__contacts-phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1048_11844)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C18.623 0 24 5.37703 24 12C24 18.623 18.623 24 12 24C5.37703 24 0 18.623 0 12C0 5.37703 5.37703 0 12 0ZM15.7832 13.2886C15.5931 13.1935 14.6584 12.7337 14.4841 12.6703C14.3099 12.6069 14.1832 12.5752 14.0564 12.7654C13.9297 12.9557 13.5653 13.3838 13.4544 13.5106C13.3435 13.6374 13.2326 13.6534 13.0425 13.5582C12.8524 13.4631 12.2398 13.2624 11.5137 12.6149C10.9485 12.111 10.5669 11.4885 10.456 11.2983C10.3452 11.108 10.4442 11.0052 10.5394 10.9104C10.6249 10.8253 10.7295 10.6884 10.8246 10.5774C10.9196 10.4664 10.9513 10.3872 11.0147 10.2604C11.0781 10.1335 11.0464 10.0225 10.9988 9.92737C10.9513 9.83227 10.5711 8.89678 10.4127 8.51625C10.2584 8.14566 10.1017 8.19581 9.98494 8.19C9.87417 8.18447 9.74733 8.1833 9.62058 8.1833C9.49383 8.1833 9.28791 8.23088 9.11358 8.42114C8.93934 8.61141 8.44823 9.0712 8.44823 10.0066C8.44823 10.9421 9.12947 11.8458 9.22453 11.9727C9.31959 12.0996 10.5651 14.0192 12.4722 14.8425C12.9258 15.0382 13.2799 15.1552 13.556 15.2428C14.0115 15.3874 14.4259 15.367 14.7535 15.3181C15.1187 15.2635 15.8783 14.8583 16.0367 14.4144C16.1951 13.9704 16.1951 13.5899 16.1476 13.5106C16.1001 13.4314 15.9733 13.3838 15.7832 13.2886Z"
                      fill="#28003E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1048_11844">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>0 800 00 00 00</p>
              </div>
              <div className="header__contacts-spans">
                <span>Mon - Fri: 09:00 - 20:00</span>
                <span>Sat: 09:00 - 18:00</span>
                <span>Sun: 09:00 - 18:00</span>
              </div>
            </div>
            <svg
              onClick={() => {
                setShoppingCartActive(true);
              }}
              style={mobile ? { display: "flex" } : { display: "none" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z"
                stroke="#28003E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="header__dark"
        style={
          catalogOpened && mobile
            ? { visability: "visible" }
            : { visability: "hidden" }
        }
      >
        <div className="header__container2">
          <div className="header__buttons">
            <div className="header__boxbuttons">
              <button
                style={mobile ? { display: "none" } : { display: "flex" }}
                className="header__catalog"
              >
                Catalog of goods
                {!catalogOpened ? (
                  <svg
                    onClick={() => setCatalogOpened(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
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
                    onClick={() => setCatalogOpened(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
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
                )}
              </button>

              <div className="header__searchinput">
                <div className="header__input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#28003E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    ref={inputRef}
                    value={value}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="search..."
                  ></input>
                </div>
                {value && (
                  <svg
                    onClick={onClickClear}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#28003E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              {isLoggedIn ? (
                <button className="header__signin" onClick={logOutUser}>
                  Sign out
                </button>
              ) : desktop ? (
                <button className="header__signin" onClick={onClickSignin}>
                  Sign in
                </button>
              ) : (
                ""
              )}
            </div>
            <div
              style={mobile ? { display: "none" } : { display: "flex" }}
              className="header__icons"
            >
              <ComparePageLink />
              {tablet ? (
                <svg
                  onClick={onClickSignin}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#FDFDFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                ""
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                  stroke="#FDFDFD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9197 1.95312V9.54544M1.71399 12.389L21.8184 6.7874"
                  stroke="#FDFDFD"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M1.88672 17.9715L5.80018 11.3723L9.88629 17.9715H1.88672Z"
                  stroke="#FDFDFD"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.86755 18.0098C2.00184 19.3398 2.98788 22 5.85775 22C8.72761 22 9.63052 19.3398 9.8863 18.0098"
                  stroke="#FDFDFD"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3176 14.5184L18.2311 7.91919L22.3172 14.5184H14.3176Z"
                  stroke="#FDFDFD"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.2985 14.5568C14.4327 15.8868 15.4188 18.547 18.2887 18.547C21.1585 18.547 22.0614 15.8868 22.3172 14.5568"
                  stroke="#FDFDFD"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                onClick={() => {
                  setShoppingCartActive(true);
                }}
                className="header__wagen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z"
                    stroke="#FDFDFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="header__count">{totalCountShoppingCart}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
