import React from "react";

import Grey from "./images/grey.png";
import Yellow from "./images/yellow.png";

import Rating from "react-rating";

const MyRating = () => {
  return (
    <>
      <Rating
        placeholderRating={4}
        emptySymbol={<img src={Grey} className="icon" />}
        placeholderSymbol={<img src={Yellow} className="icon" />}
        fullSymbol={<img src={Yellow} className="icon" />}
      />
    </>
  );
};

export default MyRating;
