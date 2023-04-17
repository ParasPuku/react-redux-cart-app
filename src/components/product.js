import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../store/actions-creator/fetch-data";
import { addToCart } from "../store/reducers/cartSlice";
import { showToast } from "../store/reducers/toastSlice";
import { ToastMessageData } from "../constant/constant";
import { getMRPPrice, getOfferPrice } from "../components/utils/utils";
import Toast from "./global/toast";
import "./product.scss";
import Loader from "./global/loader";

const Product = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const { status } = useSelector((state) => state.cart);
  const { isToastOpen } = useSelector((state) => state.toast);
  useEffect(() => {
    const response = dispatch(fetchProducts());
    console.log("Response", response);
    console.log("STATE3:::", data);
  }, [dispatch]);
  const handleAddToCart = (product) => {
    console.log("Called addToCart:::", product);
    const data = dispatch(addToCart(product));
    console.log("DATA", data);
    if (status === "completed") {
      console.log("TOAST");
      dispatch(showToast(ToastMessageData.SUCCESS));
    }
  };
  return (
    <>
      <div className="home products-section">
        <div className="user-info">
          <div className="title">Available products</div>
          <div className="create-product">Create product</div>
        </div>
        {data && data.length > 0 ? (
          data &&
          data.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="" className="product-image" />
              <div className="category">{product.category}</div>
              <h4 className="title">{product.title}</h4>
              <div className="rating">
                Rating:{" "}
                <div className="value">{product.rating.rate} out of 5</div>
              </div>
              <div className="price">
                <div className="product-price">₹{product.price} </div>
                <div className="product-cross">
                  MRP ₹{getMRPPrice(product.price * 1.5)}
                </div>
                <div className="product-discount">
                  (RS ₹{getOfferPrice(product.price * 1.5)} OFF)
                </div>
              </div>
              <button
                className="btn button-style"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
              <div className="home wishlist">
                <i className="fa fa-heart"></i>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
      {isToastOpen ? <Toast /> : ""}
    </>
  );
};

export default Product;
