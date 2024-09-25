import React from "react";
import footer_chair from "../imges/footer-chair.png";
import "./footer_responsive.css";

const Footer = () => {
  return (
    <footer className="mainfooter">
      <div className="container">
        {/* Footer Top Section */}
        <div className="row footer-top align-items-center py-5">
          <div className="col-lg-6 col-md-6 footer-one">
            <div className="ft-one-txt">
              <p>
                <i className="fa-regular fa-envelope"></i> Subscribe to
                Newsletter
              </p>
              <div className="ft-input">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Your Email"
                />
                <i className="fa-solid fa-paper-plane send-icon"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center footer-one">
            <div className="ft-one-img">
              <img
                src={footer_chair}
                alt="Footer Chair"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Footer Middle Section */}
        <div className="text-center py-3">
          <h2 className="ft-logo">Artful Interiors.</h2>
        </div>

        <div className="row footer-two text-center text-md-start">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="brand-logo">
              <i className="fa-brands fa-facebook"></i>

              <i className="fa-brands fa-twitter"></i>

              <i className="fa-brands fa-instagram"></i>

              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
            <p>
              <strong>About</strong>
            </p>
            <p>About Us</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
            <p>
              <strong>Support</strong>
            </p>
            <p>Support</p>
            <p>Knowledge Base</p>
            <p>Live Chat</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
            <p>
              <strong>Company</strong>
            </p>
            <p>Jobs</p>
            <p>Our Team</p>
            <p>Leadership</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
            <p>
              <strong>Products</strong>
            </p>
            <p>Nordic Chair</p>
            <p>Kruzo Aero</p>
            <p>Ergonomic Chair</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-three py-4">
          <hr />
          <p className="text-center fs-5 nilesh">
            | This Website is made <i className="fa-solid fa-heart" /> by Nilesh
            Panchal <i className="fa-regular fa-face-smile" /> |
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
