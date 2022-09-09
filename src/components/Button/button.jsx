import React from "react";
import S from "./button.module.css";

const Button = ({ content }) => {
  return (
    <div>
      <button>{content}</button>
    </div>
  );
};
export default Button;