import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bed_hero from "./imges/bed-hero-img.png";
import dot_green from "./imges/dots-green.svg";
import sofa_one from "./imges/sofa-1.png";

const Bed = () => {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="mainhero">
        <div className="hero container">
          <div className="herotext ">
            <div className="herotxtone">Modern Interior Design Bed</div>
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
            <img
              src={bed_hero}
              alt="Hero bed"
              title="hero bed"
              className="sofa bed-h-w"
            />
          </div>
        </div>
      </div>
      {/* Hero */}
      {/* card */}
      <div className="main-card">
        <div className="card-container container">
          <div className="card">
            <img src={sofa_one} alt="" />
            <div className="card-item-name">
              <p className="product-name">sofa</p>
              <p>
                500 Option <i class="fa-solid fa-circle circle-dot"></i> From{" "}
                <i class="fa-solid fa-indian-rupee-sign"></i>
                1000
              </p>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bed;
