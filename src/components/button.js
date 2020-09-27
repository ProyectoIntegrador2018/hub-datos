import React from "react";
import "../App.css";
import "./css/button.css";

export const Button = ({ children, type, onClick }) => {
  return (
    <button class="template" onClick={onClick} type={type}>
      {children}
    </button>
  );
};
