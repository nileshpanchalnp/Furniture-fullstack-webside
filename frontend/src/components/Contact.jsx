import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import hero_img from "./imges/hero-img.png";
import dot_green from "./imges/dots-green.svg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mainhero">
        <div className="hero container">
          <div className="herotext ">
            <div className="herotxtone">Contact Us</div>
            <div className="herotxttwo">
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
            <div className="herotxtthree">
              <button type="button" className="btn btn-light rounded-pill">
                Shop Now
              </button>
              <button
                type="button"
                className="btn btn-outline-light rounded-pill"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="heroimg">
            <img
              src={dot_green}
              alt="Decorative green dots"
              className="dotgreen"
            />
            <img src={hero_img} alt="Hero Sofa" className="sofa" />
          </div>
        </div>
      </div>
      {/* Hero */}
      <Footer />
    </div>
  );
};

export default Contact;
