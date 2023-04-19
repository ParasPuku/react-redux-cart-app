import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/cartSlice";
import { showToast } from "../store/reducers/toastSlice";
import { ToastMessageData } from "../constant/constant";
import WishlistDeleteModal from "../components/modals/wishlist-delete-modal";
import { removeFromWishList } from "../store/reducers/wishlistSlice";
import "./wishlist.scss";
const Wishlist = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const { status } = useSelector((state) => state.cart);
  const { wishlistData } = useSelector((state) => state.wishlist);
  console.log("Wishlist data", wishlistData);
  const handleAddToCart = (product) => {
    console.log("wishlist addToCart:::", product);
    const data = dispatch(addToCart(product));
    console.log("DATA", data);
    if (status === "completed") {
      console.log("TOAST");
      dispatch(showToast(ToastMessageData.SUCCESS));
    }
  };
  const handleRemoveFromWishlist = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };
  const handleCancelModal = () => {
    setIsModalOpen(false);
  };
  const onHandleDeleteProduct = (id) => {
    dispatch(removeFromWishList(id));
    setIsModalOpen(false);
    setCurrentProduct({});
  };
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
                  <img
                    src={product.image}
                    className="product-image"
                    alt="product-icon"
                  />
                </div>
                <div className="title">{product.title}</div>
                <div className="price">₹{product.price}</div>
                <div
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <div className="btn">Add to cart</div>
                </div>
                <div
                  className="remove"
                  onClick={() => handleRemoveFromWishlist(product)}
                >
                  <i className="fa fa-trash wishlist" />
                </div>
              </div>
            ))}
        </div>
      </div>
      {isModalOpen ? (
        <WishlistDeleteModal
          onHandleCancel={handleCancelModal}
          product={currentProduct}
          onDeleteProduct={onHandleDeleteProduct}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Wishlist;
