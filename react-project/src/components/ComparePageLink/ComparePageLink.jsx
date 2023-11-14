import React, { useEffect, useState } from "react";
import IconsWeight from "../IconsWeight/IconsWeight";

import "./style.scss";


const ComparePageLink = () => {
  const [comparedProductsCount, setComparedProductsCount] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setComparedProductsCount(storedItems.length);
  }, []);

  return (
    <a  href="/compare">
      <IconsWeight className="relative" />
      {comparedProductsCount > 0 && (
        <span className="compare__link">{comparedProductsCount}</span>
      )}
    </a>
  );
};

export default ComparePageLink;
