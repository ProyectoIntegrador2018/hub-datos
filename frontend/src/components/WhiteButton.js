import React from "react";
import "./css/WhiteButton.css";

export const WhiteButton = ({ children, type, onClick }) => {
  return (
    <button className="whiteBtn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default WhiteButton;