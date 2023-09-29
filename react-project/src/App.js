import React from "react";
import "./scss/app.scss";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export const CategoryContext = React.createContext();

function App() {
  const [categoryValue, setCategoryValue] = React.useState("");

  return (
    <div className="App">
      <CategoryContext.Provider value={{ categoryValue, setCategoryValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
