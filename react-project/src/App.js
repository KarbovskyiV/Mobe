import React, { useEffect } from "react";
import "./scss/app.scss";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./pages/Signin.jsx";
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

function App() {
  const [categoryValue, setCategoryValue] = React.useState("");
  const [registrationActive, setRegistrationActive] = React.useState(false);
  const [signInActive, setSignInActive] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [name, setName] = React.useState({
    name: "",
  });
  const [surname, setSurname] = React.useState({
    surname: "",
  });
  const [phonenumber, setPhonenumber] = React.useState({
    phonenumber: 0,
  });

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <div className="App">
      <PhonenumberContext.Provider value={{ phonenumber, setPhonenumber }}>
        <SurnameContext.Provider value={{ surname, setSurname }}>
          <NameContext.Provider value={{ name, setName }}>
            <userContext.Provider value={{ user, setUser }}>
              <isLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                <RegistrationActiveContext.Provider
                  value={{ registrationActive, setRegistrationActive }}
                >
                  <SignInActiveContext.Provider
                    value={{ signInActive, setSignInActive }}
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
                    </CategoryContext.Provider>
                  </SignInActiveContext.Provider>
                </RegistrationActiveContext.Provider>
              </isLoggedInContext.Provider>
            </userContext.Provider>
          </NameContext.Provider>
        </SurnameContext.Provider>
      </PhonenumberContext.Provider>
    </div>
  );
}

export default App;
