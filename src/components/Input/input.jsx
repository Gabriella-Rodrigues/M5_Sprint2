import React from "react";
import S from "./input.module.css";
const Input = ({ type, placeholder }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
export default Input;