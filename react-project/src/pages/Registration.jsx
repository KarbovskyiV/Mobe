import React from "react";
import {
  SignInActiveContext,
  RegistrationActiveContext,
  userContext,
  NameContext,
  SurnameContext,
  PhonenumberContext,
} from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const { setRegistrationActive } = React.useContext(RegistrationActiveContext);
  const { setSignInActive } = React.useContext(SignInActiveContext);
  const { name, setName } = React.useContext(NameContext);
  const { surname, setSurname } = React.useContext(SurnameContext);
  const { phonenumber, setPhonenumber } = React.useContext(PhonenumberContext);
  const { user, setUser } = React.useContext(userContext);

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [eye, setEye] = React.useState(true);

  const onClickLinkRegistration = () => {
    setSignInActive(true);
    setRegistrationActive(false);
  };

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    let newUser = {
      /*  surname,
      phonenumber, */
      name,
      email: login,
      password: e.target[4].value,
    };

    axios.post("http://mobe.local/api/register", newUser).then(({ data }) => {
      setUser({
        token: data.accessToken,
        ...data.user,
      });

      console.log(user.email.length);

      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.accessToken,
          ...data.user,
        })
      );

      navigate("/");
    });

    setRegistrationActive(false);
  };

  const changePage = () => {
    navigate("/NotFound");
    setRegistrationActive(false);
  };

  return (
    <form onSubmit={registerUser} className="registration-window">
      <div className="registration-box">
        <Link to="/">
          <svg
            className="registration__kreuz"
            onClick={() => setRegistrationActive(false)}
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
      <div className="registration-field">
        <h2>Registration</h2>
        <p>Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="your name"
          className="input__box"
        ></input>
        <p>Surname</p>
        <input
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="your surname"
          className="input__box"
        ></input>
        <p>Phone number</p>
        <input
          onChange={(e) => setPhonenumber(e.target.value)}
          type="number"
          placeholder="+380"
          className="input__box"
        ></input>
        <p>Email</p>
        <input
          onChange={(e) => setLogin(e.target.value)}
          type="email"
          placeholder="example@email.com"
          className="input__box"
        ></input>
        <p>Password</p>
        <div className="registration-eye">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={eye ? "password" : "text"}
            autoComplete="on"
            placeholder="your password"
            className="input__box"
          ></input>
          <span
            onClick={() => setEye((prev) => !prev)}
            className="registration-form-eye"
          >
            {eye ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.9 4.24C10.5883 4.07888 11.2931 3.99834 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19M14.12 14.12C13.8454 14.4147 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88M1 1L23 23M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.6819 3.96914 7.65661 6.06 6.06L17.94 17.94Z"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#28003E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        <span>
          By registering, you agree to the
          <a href="##" className="unterline" onClick={changePage}>
            terms of the provision on the processing and
          </a>
          protection of personal data and the user agreement
        </span>
        <button className="registration-button">Register</button>
        <button
          onClick={onClickLinkRegistration}
          className="registration-button2"
        >
          I am already registered
        </button>
        <button className="registration-a">
          <a href="##">
            <span>or sign in</span>
          </a>
        </button>
        <div className="registration-links">
          <button>
            <div className="registration-links1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clipPath="url(#clip0_273_37)">
                  <path
                    d="M24.266 12.2764C24.266 11.4607 24.1999 10.6406 24.0588 9.83807H12.74V14.4591H19.2217C18.9528 15.9494 18.0885 17.2678 16.823 18.1056V21.1039H20.69C22.9608 19.0139 24.266 15.9274 24.266 12.2764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.00253 14.3003C5.49987 12.8099 5.49987 11.1961 6.00253 9.70575V6.61481H2.01649C0.31449 10.0056 0.31449 14.0004 2.01649 17.3912L6.00253 14.3003Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_273_37">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>Google</p>
            </div>
          </button>

          <button>
            <div className="registration-links1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_273_150)">
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                    fill="#FDFDFD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_273_150">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Facebook</p>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Registration;