import React from "react";

import { ReactComponent as Chats } from "./Image/chat.svg";

import style from "./style.scss"

const Chat = ({ onClick, className, selected }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
   <a href="/order-page">
      <div
        className={`chat ${className} ${selected ? "selected" : ""}`}
        onClick={handleClick}
      >
       <Chats/>
      </div>
   </a>
  );
};

export default Chat;
