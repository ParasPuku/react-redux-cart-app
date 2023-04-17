import React from "react";
import Modal from "../global/modal";
import "./product-delete-modal.scss";
const ProductDeleteModal = (props) => {
  const handleDeleteOnNo = () => {
    props.onHandleCancel();
  };
  const handleDeleteOnYes = (id) => {
    props.onDeleteProduct(id);
  };
  return (
    <Modal onHandleCancel={handleDeleteOnNo}>
      <div className="product-delete-wrapper">
        <div className="product-header">
          <div>Are you sure? You want to delete!</div>
        </div>
        <div className="product-body">
          <div className="product-icon">
            <img
              src={props.product.image}
              alt={props.product.title}
              className="product-image"
            ></img>
          </div>
          <div class="product-details">
            <div className="product-category">{props.product.category}</div>
            <div className="product-title">{props.product.title}</div>
            <div className="product-price">
              <div className="actual-price">₹{props.product.price}</div>
              <div className="base-price">₹{props.product.price * 1.5}</div>
              <div className="discount">
                (RS ₹{props.product.price * 1.5} OFF)
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="button-actions">
            <button className="btn-no" onClick={handleDeleteOnNo}>
              No
            </button>
            <button
              className="btn-yes"
              onClick={() => handleDeleteOnYes(props.product.id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDeleteModal;
