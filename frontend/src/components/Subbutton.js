import React from "react";
import "./css/subButton.css";
export const Subbutton = ({ children, onClick, href, buttonSize }) => {
  return (
    <a href={href} class="subButton" onClick={onClick}>
      {children}
    </a>
  );
};
