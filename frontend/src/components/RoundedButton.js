import React from "react";
import "./css/WhiteButton.css";
import "./css/Button.css";

export const RoundedButton = ({ children, type, onClick }) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundedButton;