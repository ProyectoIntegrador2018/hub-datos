import React from "react";
import "./css/RedButton.css";
import "./css/WhiteButton.css";
import "./css/BlackButton.css";

export const RoundedButton = ({ children, type, onClick }) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundedButton;