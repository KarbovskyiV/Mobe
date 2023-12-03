import React from "react";
import { useSelector } from "react-redux";
import IconsWeight from "../IconsWeight/IconsWeight";
import "./style.scss";

const ComparePageLink = ({ className }) => {
  const comparedProductsCount = useSelector(
    (state) => state.compare.comparedProducts.length
  );

  return (
    <a href="/compare">
      <IconsWeight className={className} />
      {comparedProductsCount > 0 && (
        <span className="compare__link">{comparedProductsCount}</span>
      )}
    </a>
  );
};

export default ComparePageLink;
