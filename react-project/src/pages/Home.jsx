import React from "react";
import Slider from "../components/Sliders/Slider";
import LogosBlock from "../components/LogosBlock/LogosBlock";
import ProductCart from "../components/ProductCart/index.jsx";

const Home = () => {
  return (
    <div className="home">
      <div className="home__slider-logos">
        <Slider />
        <LogosBlock />
        <ProductCart />
      </div>
    </div>
  );
};

export default Home;
