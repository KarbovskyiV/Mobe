import React from "react";

import { ReactComponent as Heart } from "./images/weight.svg";

import "./style.scss";

const IconsWeight = ({ onClick, className }) => {
  return (
    <div className={`weight ${className}`} onClick={onClick}>
      <Heart />
    </div>
  );
};

export default IconsWeight;
