import React from "react";

const Button = ({ title, type ,className }) => {
  return (
    <button type={type} className={`auto-button ${className}`}>
      {title}
    </button>
  );
};

export default Button;
