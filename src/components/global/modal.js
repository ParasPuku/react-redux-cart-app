import React from "react";
import "./modal.scss";
import closeIcon from "../../assets/images/close-icon.png";
const Modal = (props) => {
  const onHandleDeleteProduct = () => {
    props.onHandleCancel();
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Need your confirmation.!</div>
          <div className="modal-close">
            <img
              src={closeIcon}
              alt="close-icon"
              className="close-icon"
              onClick={onHandleDeleteProduct}
            />
          </div>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
