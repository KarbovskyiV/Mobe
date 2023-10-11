import React from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import {
  SignInActiveContext,
  userContext,
  RegistrationActiveContext,
} from "../App";

function Header() {
  const { setSignInActive } = React.useContext(SignInActiveContext);
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(userContext);
  const { setRegistrationActive } = React.useContext(RegistrationActiveContext);

  const logOutUser = () => {
    setUser({
      email: "",
    });
    localStorage.removeItem("user");

    setSignInActive(true);
  };

  const onClickSignin = () => {
    setSignInActive(true);
  };

  return (
    <div className="header">
      <div className="header__light">
        <Logo />
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
          <button className="header__catalog">
            Catalog of goods
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
          </button>

          {user.email.length ? (
            <button className="header__signin" onClick={logOutUser}>
              Sign out
            </button>
          ) : (
            <button className="header__signin" onClick={onClickSignin}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
