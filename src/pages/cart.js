import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDeleteModal from "../components/modals/product-delete-modal";
import { removeCart } from "../store/reducers/cartSlice";
import "./cart.scss";
import { getMRPPrice, getOfferPrice } from "../components/utils/utils";

const Cart = () => {
  const { data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", fixedCheckoutSection);
    return () => {
      window.removeEventListener("scroll", fixedCheckoutSection);
    };
  });
  const fixedCheckoutSection = () => {
    const navbar = document.querySelector(".navbar-container").clientHeight;
    const checkout = document.querySelector(".checkout-section");
    checkout.classList.remove("sticky");
    if (window.scrollY > navbar) {
      checkout.classList.add("sticky");
    } else {
      checkout.classList.remove("sticky");
    }
    console.log("called");
  };
  const handleRemoveToCart = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };
  const handleCancelModal = () => {
    setIsModalOpen(false);
  };
  const onHandleDeleteProduct = (id) => {
    dispatch(removeCart(id));
    setIsModalOpen(false);
    setCurrentProduct({});
  };
  return (
    <div className="product-cart-wrapper">
      {data && data.length > 0 ? (
        <div className="product-msg">
          <i className="fa fa-shopping-bag"></i>My Cart
        </div>
      ) : (
        ""
      )}
      <div
        className={`cart cart-container ${
          data && data.length === 1 ? "single-cart" : ""
        } ${data && data.length <= 0 ? "empty-cart" : ""}`}
      >
        <div className={`products-section`}>
          {data && data.length > 0 ? (
            data.map((product) => (
              <div className="card" key={product.id}>
                <div className="left-section">
                  <img src={product.image} alt="" className="product-image" />
                  <div className="cart-details">
                    <div className="category">{product.category}</div>
                    <div className="title">{product.title}</div>
                    <div className="rating">
                      Rating:{" "}
                      <div className="value">
                        {product.rating.rate} out of 5
                      </div>
                    </div>
                    <div className="price">₹{product.price}</div>
                    <div className="cart-action">
                      <button
                        className="remove btn"
                        onClick={() => handleRemoveToCart(product)}
                      >
                        <i className="fa fa-trash" />
                        Remove
                      </button>
                      <div className="middle-divider"></div>
                      <button className="wishlist btn">
                        <i className="fa fa-heart" />
                        Move to wishlist
                      </button>
                    </div>
                  </div>
                </div>
                <div className="right-section">
                  <div className="price">
                    <div className="product-price">₹{product.price} </div>
                    <div className="product-cross">
                      MRP ₹{getMRPPrice(product.price * 1.5)}
                    </div>
                    <div className="product-discount">
                      (RS ₹{getOfferPrice(product.price * 1.5)} OFF)
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-wrapper">
              <h2>Oooooopsss...</h2>
              <div className="empty-cart">There is no product in cart.!</div>
              <Link to="/" className="link">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
        {data && data.length > 0 ? (
          <div className="checkout-section">
            <div className="promo-code">
              <div className="text">Apply promo code</div>
              <div className="promos">
                <input placeholder="Enter promo code" className="promo" />
                <button className="submit">Apply</button>
              </div>
            </div>
            <div className="checkout-summary">
              <div className="summary">Cart Summary</div>
              <div className="amount-section">
                <div className="amount">
                  <div className="title">Total amount</div>
                  <div className="value">$14.54</div>
                </div>
                <div className="discount">
                  <div className="title">Discount</div>
                  <div className="value">$5.55</div>
                </div>
                <div className="delivery">
                  <div className="title">Delivery charge</div>
                  <div className="value">FREE</div>
                </div>
              </div>
              <div className="total-amount">
                <div>Total amount</div>
                <div>$14.54</div>
              </div>
              <div className="checkout-btn">
                <button className="btn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {isModalOpen ? (
        <ProductDeleteModal
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

export default Cart;
