import React, { useEffect } from "react";

import IconsWeight from "../IconsWeight/IconsWeight";

import "./style.scss";

const ComparePageLink = ({ className }) => {
  return (
    <a href="/compare">
      <IconsWeight className={className} />
      {/*{comparedProductsCount > 0 && (
        <span className="compare__link"></span>
      )}*/}
    </a>
  );
};

export default ComparePageLink;
