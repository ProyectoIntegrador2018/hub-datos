import React from "react";
import "../App.css";
import "./css/BlackButton.css";

export const RoundedButton = ({ children, type, onClick }) => {
  return (
    <button class="template" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default RoundedButton;