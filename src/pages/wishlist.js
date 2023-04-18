import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./wishlist.scss";
const Wishlist = () => {
  const { wishlistData } = useSelector((state) => state.wishlist);
  console.log("Wishlist data", wishlistData);
  return (
    <div className="wishlist-container">
      <div className="top-section">
        <i className="fa fa-heart my-wishlist"></i>
        <div className="title">My Wishlist</div>
      </div>
      <div className="wishlist-products">
        <div className="wishlist-table">
          <div className="product">Product</div>
          <div className="title">Title</div>
          <div className="price">Price</div>
          <div className="add-to-cart">Add to Cart</div>
          <div className="remove">Remove</div>
        </div>
        <div className="products-wrapper">
          {wishlistData &&
            wishlistData.length > 0 &&
            wishlistData.map((product) => (
              <div className="products">
                <div className="image">
                  <img src={product.image} className="product-image" />
                </div>
                <div className="title">{product.title}</div>
                <div className="price">{product.price}</div>
                <div className="add-to-cart">
                  <div className="btn">Add to cart</div>
                </div>
                <div className="remove">
                  <i className="fa fa-trash wishlist" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
