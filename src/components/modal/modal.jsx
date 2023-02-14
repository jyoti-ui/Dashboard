import React from "react";
import "./modal.css";

const Modal = ({ children, ...otherProps }) => {
  const { title, className, onClose} = otherProps;
  return (
    <div className={`${className}`}>
      <div className="modal-header">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
      </div>
      <div className="modal-body">
      {children}
    </div>
  
    </div>
  );
};

export default Modal;
