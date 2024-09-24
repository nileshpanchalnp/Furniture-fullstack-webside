import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import shoping_icon from "./imges/cart.svg";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route location
  const [activePage, setActivePage] = useState("home");
  const [userName, setUser] = useState(null); // Change to a single object instead of an array

  useEffect(() => {
    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/user/get")
      .then((response) => {
        console.log(response.data);
        setUser(response.data); // Assuming response.data is the user object
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    // Update activePage based on current path
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActivePage("home");
    } else if (currentPath === "/store") {
      setActivePage("store");
    } else if (currentPath === "/contact") {
      setActivePage("contact");
    } else if (currentPath === "/sofa") {
      setActivePage("sofa");
    } else if (currentPath === "/chair") {
      setActivePage("chair");
    } else if (currentPath === "/bed") {
      setActivePage("bed");
    }
  }, [location]); // Runs when the route changes

  const gotoPage = (path, page) => {
    navigate(path);
    setActivePage(page);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container mainnavbar">
          <ul className="d-flex align-items-center">
            <li className="logo">Artful Interiors.</li>
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
                  onClick={() => gotoPage("/", "home")}
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
                    <li
                      className={activePage === "sofa" ? "active" : ""}
                      onClick={() => gotoPage("/sofa", "sofa")}
                    >
                      Sofa
                    </li>
                    <li
                      className={activePage === "chair" ? "active" : ""}
                      onClick={() => gotoPage("/chair", "chair")}
                    >
                      Chair
                    </li>
                    <li
                      className={activePage === "bed" ? "active" : ""}
                      onClick={() => gotoPage("/bed", "bed")}
                    >
                      Bed
                    </li>
                  </ul>
                </li>
                <li
                  className={activePage === "store" ? "active" : ""}
                  onClick={() => gotoPage("/store", "store")}
                >
                  Store
                </li>
                <li
                  className={activePage === "contact" ? "active" : ""}
                  onClick={() => gotoPage("/contact", "contact")}
                >
                  Contact us
                </li>
              </ul>
            </div>

            {/* Show username if available */}
            {userName && (
              <div className="username-show">
                <p>Hii! {userName.username}</p>
              </div>
            )}

            <ul className="navbutton d-flex align-items-center pt-3">
              <li onClick={() => gotoPage("/login", "login")}>
                <button type="button" className="btn btn-light loginhvr">
                  Login
                </button>
              </li>

              <li onClick={() => gotoPage("/signUp", "signUp")}>
                <button
                  type="button"
                  className="btn btn-outline-light loginhvr signupbtn"
                >
                  Sign up
                </button>
              </li>
              <li
                className="nav-item card-icon"
                onClick={() => gotoPage("/checkout", "checkout")}
              >
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
    </>
  );
};

export default Navbar;
