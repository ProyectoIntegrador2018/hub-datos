import React from "react";
import "../App.css";
import "./css/BlackButton.css";

export const Button = ({ children, type, onClick }) => {
  return (
    <button class="template" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;