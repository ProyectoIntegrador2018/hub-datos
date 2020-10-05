import React from "react";
import "../App.css";
import "./css/Button.css";

export const Button = ({ children, type, onClick }) => {
  return (
    <button className="blackBtn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;