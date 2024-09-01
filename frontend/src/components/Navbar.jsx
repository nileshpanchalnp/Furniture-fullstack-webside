import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import shoping_icon from "./imges/cart.svg";

const Navbar = () => {
  // page Navigation
  const navigate = useNavigate();

  const [activePage, setActivepage] = useState("home");

  const gotoHome = () => {
    navigate("/");
    setActivepage("home");
  };
  const gotoStore = () => {
    navigate("/store");
    setActivepage("store");
  };
  const gotoContact = () => {
    navigate("/contact");
    setActivepage("contact");
  };
  const gotoSofa = () => {
    navigate("/sofa");
  };
  const gotoChair = () => {
    navigate("/chair");
  };
  const gotoBed = () => {
    navigate("/bed");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container mainnavbar">
          <ul className="d-flex align-items-center">
            <li className="logo">Homebound.</li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars bars"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <div className="navitemcenter d-flex justify-content-center w-100">
              <ul className="navbar-nav mb-2 mb-lg-0 navtxt">
                <li
                  className={activePage === "home" ? "active" : ""}
                  onClick={gotoHome}
                >
                  Home
                </li>
                {/* Dropdown menu for "Shop" with hover effect */}
                <li className="nav-item dropdown hover-dropdown">
                  <li
                    className=" dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </li>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="dropdown-item" onClick={gotoSofa}>
                      Sofa
                    </li>
                    <li className="dropdown-item" onClick={gotoChair}>
                      Chair
                    </li>
                    <li className="dropdown-item" onClick={gotoBed}>
                      Bed
                    </li>
                  </ul>
                </li>
                <li className="nav-item ataguse" onClick={gotoStore}>
                  Store
                </li>
                <li className="nav-item" onClick={gotoContact}>
                  Contact us
                </li>
              </ul>
            </div>

            <ul className="navbutton d-flex align-items-center pt-3">
              <li>
                <button type="button" className="btn btn-light loginhvr">
                  Login
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-outline-light loginhvr signupbtn"
                >
                  Sign up
                </button>
              </li>
              <li className="nav-item card-icon">
                <img
                  src={shoping_icon}
                  alt="Shopping icon"
                  title="Shopping icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
