import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import shoping_icon from "./imges/cart.svg";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route location
  const [activePage, setActivePage] = useState("home");
  const [userName, setUser] = useState(""); // Change to a single object instead of an array

  useEffect(() => {
    // Update activePage based on current path
    const Username = Cookies.get("User");
    setUser(Username);
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

  // Logout function to clear user session and redirect
  const handleLogout = () => {
    Cookies.remove("User"); // Remove the user cookie
    localStorage.removeItem("token"); // Optionally, remove any token if stored in localStorage
    setUser(""); // Clear user from state
    navigate("/"); // Redirect to the sign-up page
    alert("logOut Succeful");
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
              <ul className="navbar-nav mb-2 mb-lg-0 navtxt ">
                <li
                  className={activePage === "home" ? "active" : ""}
                  onClick={() => gotoPage("/home", "home")}
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
                    className="dropdown-menu nav-dropdown-section-menu"
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
                <p>Hii!&nbsp;{userName}</p>
              </div>
            )}

            <ul className="navbutton d-flex align-items-center pt-3">
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
              <li onClick={() => gotoPage("/", "signUp")}>
                <button
                  type="button"
                  className="btn btn-outline-light loginhvr signupbtn"
                >
                  Sign up
                </button>
              </li>
            </ul>
            <div className="dropdown nav-dropdown-last">
              <button
                className="btn btn-outline-light dropdown-toggle nav-dropdown-last-btn"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown" // Change data-toggle to data-bs-toggle
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </button>
              <ul
                className="dropdown-menu nav-last-drop-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li onClick={() => gotoPage("/login", "login")}>
                  <button type="button" className="btn btn-light nav-login-btn">
                    Login
                  </button>
                </li>
                <li onClick={() => gotoPage("/admin", "admin")}>
                  {" "}
                  <button type="button" className="btn btn-light nav-login-btn">
                    Admin
                  </button>
                </li>

                <li onClick={handleLogout}>
                  <button type="button" className="btn btn-light nav-login-btn">
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
