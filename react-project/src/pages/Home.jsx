import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Slider from "../components/Sliders/SliderHome/Slider.jsx";
import LogosBlock from "../components/LogosBlock/LogosBlock.jsx";

import { CatalogOpenedContext } from "../App.js";
import PromotionContainer from "../Containers/Promotions/PromotionContainer.jsx";
import NewContainer from "../Containers/New/NewContainer.jsx";
import PopularContainer from "../Containers/Popular/PopularContainer.jsx";
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
      <PromotionContainer />
      <NewContainer />
      <PopularContainer />

      <Subscribe />
    </div>
  );
};

export default Home;
