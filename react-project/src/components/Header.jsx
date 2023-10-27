import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  SignInActiveContext,
  userContext,
  isLoggedInContext,
  SearchContext,
  totalCountShoppingCartContext,
  ShoppingCartActiveContext,
} from "../App";
import debounce from "lodash.debounce";

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

  return (
    <div className="header">
      <div className="header__light">
        <Link to="/">
          <Logo />
        </Link>

        <div className="header__contactus">
          <a href="##">Contact us</a>

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
      </div>
      <div className="header__dark">
        <div className="header__buttons">
          <div className="header__boxbuttons">
            <button className="header__catalog">
              Catalog of goods
              <svg
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
            ) : window.innerWidth > 820 ? (
              <button className="header__signin" onClick={onClickSignin}>
                Sign in
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="header__icons">
            {window.innerWidth < 821 ? (
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
  );
}

export default Header;
