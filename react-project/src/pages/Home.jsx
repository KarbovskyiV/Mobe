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
import Chat from "../components/Chat/Chat";

import style from "./style.scss"

const Home = () => {
  const { catalogOpened } = React.useContext(CatalogOpenedContext);

  return (
    <div className="home">
      <div className="home__container">
        {catalogOpened && (
          <ErrorBoundary>
            <Catalog />
          </ErrorBoundary>
        )}
      </div>
      <Slider />
      <LogosBlock />
      <Chat className="chat-home"/>
      <PromotionContainer />
      <NewContainer />
      <PopularContainer />
      <Subscribe />
    </div>
  );
};

export default Home;
