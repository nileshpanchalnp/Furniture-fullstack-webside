import React from "react";
import footer_chair from "./imges/footer-chair.png";
// import icon_footer from "./imges/reach-icon-footer.png";

const Footer = () => {
  return (
    <>
      <div className="mainfooter">
        <div className="footer container">
          <div className="footer-one">
            <div className="ft-one-txt">
              <p>
                <i class="fa-regular fa-envelope"></i> Subscribe to Newsletter
              </p>
              <div className="ft-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            </div>
            <div className="ft-one-img">
              <img src={footer_chair} alt="" />
            </div>
          </div>
          <h2 className="ft-logo">Artful Interiors.</h2>
          <div className="footer-two">
            <div className="ft-item-one">
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae{" "}
                <br />
                odio quis nisl dapibus malesuada. Nullam ac aliquet velit.{" "}
                <br /> Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
                <br /> Pellentesque habitant
              </p>
              <div className="brand-logo">
                <p>
                  <i class="fa-brands fa-facebook"></i>
                </p>
                <p>
                  <i class="fa-brands fa-twitter"></i>
                </p>
                <p>
                  <i class="fa-brands fa-instagram"></i>
                </p>
                <p>
                  <i class="fa-brands fa-linkedin"></i>
                </p>
              </div>
            </div>
            <div className="ft-item-two">
              <p>About us</p>
              <p>Services</p>
              <p>Blog</p>
              <p>Contact us</p>
            </div>
            <div className="ft-item-three">
              <p>Support</p>
              <p>Knowledge base</p>
              <p>Live chat</p>
            </div>
            <div className="ft-item-four">
              <p>Jobs</p>
              <p>Our team</p>
              <p>Leadership</p>
              <p>Privacy Policy</p>
            </div>
            <div className="ft-item-five">
              <p>Nordic Chair</p>
              <p>Kruzo Aero</p>
              <p>Ergonomic Chair</p>
            </div>
          </div>
          <div className="footer-three"></div>
        </div>
      </div>
      <br />
      <br />
      <hr className="container" />
      <p className="container fs-5  text-center p-5 nilesh">
        | This Website is made <i className="fa-solid fa-heart" /> by Nilesh
        Panchal <i className="fa-regular fa-face-smile" /> |
      </p>
    </>
  );
};

export default Footer;
