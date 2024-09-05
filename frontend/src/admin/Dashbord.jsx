import React, { useState } from "react";
import "./Dashbord.css";
import { useNavigate } from "react-router-dom";

export default function Dashbord() {
  const navigate = useNavigate();

  const [activePage, setActivepage] = useState("dashbord");
  const [isMenuExpanded, setIsMenuExpanded] = useState(true); // State for toggling the menu

  const gotoHome = () => {
    navigate("/");
    setActivepage("dashbord");
  };
  const gotoChair = () => {
    navigate("/chairadmin");
    setActivepage("chairadmin");
  };
  const gotoAdminBed = () => {
    navigate("/adminbed");
    setActivepage("adminbed");
  };
  const gotoSofa = () => {
    navigate("/sofa");
    setActivepage("sofa");
  };
  const gotoNotification = () => {
    navigate("/notification");
    setActivepage("notification");
  };
  const gotoProfile = () => {
    navigate("/profile");
    setActivepage("profile");
  };

  // Toggle the menu expansion
  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <>
      <div className={`dashbox ${isMenuExpanded ? "expanded" : "collapsed"}`}>
        <div>
          <h5 onClick={toggleMenu} className="admin-dashbord-txt">
            <i className="fa-solid fa-bars"></i>{" "}
            {isMenuExpanded && "Admin Dashboard"}
          </h5>
          <hr />
          <ul className="dashbord-item border-0">
            <li
              className={activePage === "dashbord" ? "active" : ""}
              onClick={gotoHome}
            >
              <i className="fa-solid fa-square-poll-vertical font"></i>{" "}
              {isMenuExpanded && "Dashboard"}
            </li>
            <li
              onClick={gotoChair}
              className={activePage === "chairadmin" ? "active" : ""}
            >
              {" "}
              <i class="fa-solid fa-chair"> </i>&nbsp;
              {isMenuExpanded && "Chair"}
            </li>
            <li
              onClick={gotoAdminBed}
              className={activePage === "adminbed" ? "active" : ""}
            >
              <i class="fa-solid fa-bed"> </i> &nbsp; {isMenuExpanded && "Bed"}
            </li>
            <li
              onClick={gotoSofa}
              className={activePage === "sofa" ? "active" : ""}
            >
              <i class="fa-solid fa-couch"></i>&nbsp;
              {isMenuExpanded && "Sofa"}
            </li>
            <li
              onClick={gotoNotification}
              className={activePage === "notification" ? "active" : ""}
            >
              <i className="fa-solid fa-bell font"></i>{" "}
              {isMenuExpanded && "Notification"}
            </li>
            <li
              onClick={gotoProfile}
              className={activePage === "profile" ? "active" : ""}
            >
              <i className="fa-solid fa-user font"></i>{" "}
              {isMenuExpanded && "Profile"}
            </li>
            <li>
              <i className="fa-solid fa-arrow-right-to-bracket font"></i>{" "}
              {isMenuExpanded && "Sign In"}
            </li>
            <li>
              <i className="fa-solid fa-user-plus font"></i>{" "}
              {isMenuExpanded && "Sign Up"}
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-admin">
          <h2>hombord</h2>
        </div>
      </div>
    </>
  );
}
