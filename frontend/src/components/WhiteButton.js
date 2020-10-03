import React from "react";
import "./css/WhiteButton.css";

export const Button2 = ({ children, type, onClick }) => {
  return (
    <button class="" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button2;