import React from "react";

const Button = ({ title, type }) => {
  return (
    <button type={type} className="auto-button">
      {title}
    </button>
  );
};

export default Button;
