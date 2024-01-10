import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "./Image/iconArrow.svg";

import "./style.scss";

const MenuStep = ({ label, page, series, search }) => {
  const navigate = useNavigate();

  const getFilterPage = () => {
    const page = "product-page";
    navigate(`/product-page/${label}/${page}/${series}`);
  };

  return (
    <div className="menuStep__titlemenu">
      <Link to="/">Main</Link>
      <img src={Arrow} alt="cross" />
      <div
        className="menuStep__Lablemenu"
        style={
          search === "" ? { visibility: "visible" } : { visibility: "hidden" }
        }
      >
        <a href="##" onClick={() => getFilterPage()}>
          {label}
        </a>
        {page === "product-page" ? (
          ""
        ) : (
          <>
            <img
              style={
                series === "undefined"
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              src={Arrow}
              alt="cross"
            />
            <a href="##">{series === "undefined" ? "" : series}</a>
          </>
        )}
      </div>
      <a href="##">{search}</a>
    </div>
  );
};
export default MenuStep;
