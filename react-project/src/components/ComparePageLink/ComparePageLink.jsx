import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconsWeight from "../IconsWeight/IconsWeight";
import { setComparedProductsCount } from "../../redux/compareSlice";

import "./style.scss";

const ComparePageLink = () => {
  const dispatch = useDispatch();
  const comparedProductsCount = useSelector(
    (state) => state.compare.comparedProductsCount
  );

  useEffect(() => {
    console.log("useEffect called");
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(setComparedProductsCount(storedItems.length));
  }, [dispatch]);

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
