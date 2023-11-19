import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Slider from "../components/Sliders/SliderHome/Slider.jsx";
import LogosBlock from "../components/LogosBlock/LogosBlock.jsx";
import { CatalogOpenedContext } from "../App.js";
import Promotions from "../components/Promotions/Promotions.jsx";
import New from "../components/New/New.jsx";
import Popular from "../components/Popular/Popular.jsx";
import Subscribe from "../components/Subscribe/Subscribe.jsx";
import Catalog from "../components/Catalog/Catalog.jsx";

const Home = () => {
  const { catalogOpened } = React.useContext(CatalogOpenedContext);

  return (
    <div className="home">
      <div className="home__slider-logos">
        {catalogOpened && (
          <ErrorBoundary>
            <Catalog />
          </ErrorBoundary>
        )}

        <Slider />
        <LogosBlock />
      </div>
      <Promotions />
      <New />
      <Popular />
      <Subscribe />
    </div>
  );
};

export default Home;
