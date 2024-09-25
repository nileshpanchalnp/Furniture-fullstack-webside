import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import visit_store from "./imges/Visit_store__Store_page.jpg";
import store_main_header from "./imges/Store-main_page-header.jpg";
import city_1 from "./imges/store-city-1.png";
import city_2 from "./imges/store-city-2.png";
import city_3 from "./imges/store-city-3.png";
import city_4 from "./imges/store-city-4.png";
import city_5 from "./imges/store-city-5.png";
import city_6 from "./imges/store-city-6.png";
import city_7 from "./imges/store-city-7.png";
import city_8 from "./imges/store-city-8.png";
import city_9 from "./imges/store-city-9.png";

const Store = () => {
  return (
    <div>
      <Navbar />
      <div className="visit-store container">
        <img src={visit_store} alt="" />
      </div>
      <br />
      <div className="store-main-header container">
        <img src={store_main_header} alt="" />
      </div>
      <br />
      <div className="store-city container">
        <img src={city_1} alt="" />
        <img src={city_2} alt="" />
        <img src={city_3} alt="" />
        <img src={city_4} alt="" />
        <img src={city_5} alt="" />
        <img src={city_6} alt="" />
        <img src={city_7} alt="" />
        <img src={city_8} alt="" />
        <img src={city_9} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
