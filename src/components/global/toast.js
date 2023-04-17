import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToast } from "../../store/reducers/toastSlice";
import "./toast.scss";

const Toast = () => {
  const dispatch = useDispatch();
  const { activeClass, MESSAGE } = useSelector((state) => state.toast);
  setTimeout(() => {
    handleToastMessage();
  }, 3000);
  const handleToastMessage = () => {
    dispatch(hideToast({ isToastOpen: false, STATUS: "", MESSAGE: "" }));
  };
  return (
    <div className="toast-wrapper">
      <div className="toast-section">
        <div className={`status-border ${activeClass}`}></div>
        <div className={`status-icon ${activeClass}`}></div>
        <div className="status-message">{MESSAGE}</div>
        <div className="close-icon" onClick={handleToastMessage}>
          x
        </div>
      </div>
    </div>
  );
};

export default Toast;
