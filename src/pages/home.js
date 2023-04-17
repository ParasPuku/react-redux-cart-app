import React from "react";
import Products from "../components/product";
import "./home.scss";
export default function home() {
  return (
    <div className="products-wrapper">
      {/* <h2 className="products">Available products</h2> */}
      <Products />
    </div>
  );
}
