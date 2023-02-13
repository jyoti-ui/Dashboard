import React from "react";
import "./input.css"

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="container">
      <label>{label}</label>
      <div>
        <input {...otherProps} className="input-field" />
      </div>
    </div>
  );
};

export default Input;
