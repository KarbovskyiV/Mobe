import React from "react";

import { ReactComponent as Heart } from "./images/heart.svg";

import "./style.scss";

const IconsHeart = ({onClick, className }) => {
  return (
    <div className={`heart ${className}`} onClick={onClick}>
      
      <Heart />
    </div>
  );
};

export default IconsHeart;
