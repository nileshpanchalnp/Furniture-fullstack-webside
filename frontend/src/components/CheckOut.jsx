import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import chair_semple from "./imges/chair-2.jpg";

const CheckOut = () => {
  return (
    <>
      <Navbar />
      <div className="checkout-main">
        <div className="checkout-container container">
          <div className="product-name-header">
            <p>Image</p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />

          <div className="product-name-header">
            <p className="checkout-img">
              <img src={chair_semple} alt="" />
            </p>
            <p className="product-name-CO">
              Taarkashi Solid Wooden Queen Size non Storege Bed in American
              Walnut Finish{" "}
            </p>
            <p>Price</p>
            <p>
              <div className="input-number-box">
                <div className="minus">-</div>
                <div className="input-number">10</div>
                <div className="plus">+</div>
              </div>
            </p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
