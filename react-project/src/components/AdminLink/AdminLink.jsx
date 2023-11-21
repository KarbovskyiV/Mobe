import React from "react";
import "./style.scss";

const AdminLink = (props) => {
  const { iconSrc, text, link } = props;

  return (
    <a className="admin-link" href={link}>
      <img src={iconSrc} alt={text} />
      <p>{text}</p>
    </a>
  );
};

export default AdminLink;
