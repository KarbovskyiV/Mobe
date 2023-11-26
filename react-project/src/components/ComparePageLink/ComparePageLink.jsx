import React from "react";
import { useSelector } from "react-redux";
import IconsWeight from "../IconsWeight/IconsWeight";
import "./style.scss";

const ComparePageLink = () => {
  const comparedProductsCount = useSelector(
    (state) => state.compare.comparedProductsCount
  );

  return (
    <a href="/compare">
      <IconsWeight className="relative" />
      {comparedProductsCount > 0 && (
        <span className="compare__link">{comparedProductsCount}</span>
      )}
    </a>
  );
};

export default ComparePageLink;
