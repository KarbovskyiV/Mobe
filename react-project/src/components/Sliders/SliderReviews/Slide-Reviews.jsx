import React from "react";
import "./style.scss";
import MyRating from "../../MyRating/MyRating.jsx";

const Reviews = () => {
  return (
    <div className="reviewsSlide">
      <div className="reviewsSlide__title">
        <p>Veronica Scott</p>
        <MyRating />
      </div>
      <p>
        This smartphone is simply incredible! As a fan of Apple products, I was
        really looking forward to the release of the new iPhone 14 Pro, and it
      </p>
    </div>
  );
};

export default Reviews;
