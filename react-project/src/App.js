import React, { useEffect } from "react";
import "./scss/app.scss";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./pages/Signin.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Registration from "./pages/Registration.jsx";
import NotFound from "./pages/NotFound.jsx";

export const CategoryContext = React.createContext();
export const RegistrationActiveContext = React.createContext();
export const SignInActiveContext = React.createContext();
export const isLoggedInContext = React.createContext();
export const userContext = React.createContext();
export const NameContext = React.createContext();
export const SurnameContext = React.createContext();
export const PhonenumberContext = React.createContext();
export const SearchContext = React.createContext();
export const ForgotPasswordActiveContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [categoryValue, setCategoryValue] = React.useState("");
  const [registrationActive, setRegistrationActive] = React.useState(false);
  const [signInActive, setSignInActive] = React.useState(false);
  const [forgotPasswordActive, setForgotPasswordActive] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
  });

  const [name, setName] = React.useState({
    name: "",
  });
  const [surname, setSurname] = React.useState({
    surname: "",
  });
  const [phone, setPhone] = React.useState({
    phone: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsLoggedIn(true);
    }
  }, []);

  console.log(forgotPasswordActive);

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <PhonenumberContext.Provider value={{ phone, setPhone }}>
          <SurnameContext.Provider value={{ surname, setSurname }}>
            <NameContext.Provider value={{ name, setName }}>
              <userContext.Provider value={{ user, setUser }}>
                <isLoggedInContext.Provider
                  value={{ isLoggedIn, setIsLoggedIn }}
                >
                  <RegistrationActiveContext.Provider
                    value={{ registrationActive, setRegistrationActive }}
                  >
                    <SignInActiveContext.Provider
                      value={{ signInActive, setSignInActive }}
                    >
                      <ForgotPasswordActiveContext.Provider
                        value={{
                          forgotPasswordActive,
                          setForgotPasswordActive,
                        }}
                      >
                        <CategoryContext.Provider
                          value={{ categoryValue, setCategoryValue }}
                        >
                          <Header />

                          <Routes>
                            <Route path="/NotFound" element={<NotFound />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/*" element={<Home />} />
                          </Routes>
                          <Footer />
                          <div
                            style={
                              signInActive === true
                                ? { display: "flex" }
                                : { display: "none" }
                            }
                            className="overlaySignIn"
                          >
                            <LoginPage />
                          </div>
                          <div
                            style={
                              registrationActive === true
                                ? { display: "flex" }
                                : { display: "none" }
                            }
                            className="overlayRegistration"
                          >
                            <Registration />
                          </div>
                          <div
                            style={
                              forgotPasswordActive === true
                                ? { display: "flex" }
                                : { display: "none" }
                            }
                            className="overlayForgotPassword"
                          >
                            <ForgotPassword />
                          </div>
                        </CategoryContext.Provider>
                      </ForgotPasswordActiveContext.Provider>
                    </SignInActiveContext.Provider>
                  </RegistrationActiveContext.Provider>
                </isLoggedInContext.Provider>
              </userContext.Provider>
            </NameContext.Provider>
          </SurnameContext.Provider>
        </PhonenumberContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
