import React from "react";
import spinner from "../../assets/images/loader.gif";
import "./loader.scss";
const Loader = (props) => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <img src={spinner} alt="loader.gif" />
      </div>
    </div>
  );
};

export default Loader;
