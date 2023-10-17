import React, { useEffect, useState } from "react";
import { ForgotPasswordActiveContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios.js";

const ForgotPassword = () => {
  const { setForgotPasswordActive } = React.useContext(
    ForgotPasswordActiveContext
  );

  const forgotPassword = (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
    };

    axios
      .post("/forgot-password", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={forgotPassword} className="forgotPassword-window">
      <div className="forgotPassword-box">
        <Link to="/">
          <svg
            onClick={() => setForgotPasswordActive(false)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_258_7121)">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#28003E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_258_7121">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      <div className="forgotPassword-field">
        <h1>Forgot password</h1>
        <p>
          Please enter your email address. You will receive a link to create a
          new password via email
        </p>
        <div className="forgotPassword-input">
          <label>Email address</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="input__box"
          ></input>
        </div>
        <button className="forgotPassword-button">Get new password</button>
      </div>
    </form>
  );
};

export default ForgotPassword;
