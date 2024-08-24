import React, { useState } from "react";
import shoping_icon from "./imges/cart.svg";
import hero_img from "./imges/hero-img.png";
import dot_green from "./imges/dots-green.svg";
import best_deal from "./imges/deal_zone_icon-1.svg";
import store_icon from "./imges/store_icon-2.png";
import dining_table from "./imges/dining-table-6.png";
import sofa_icon from "./imges/sofa.png";
import chair_icon from "./imges/chair-icon.png";
import bed_icon from "./imges/bed-icon.png";
import Wardrobes_icon from "./imges/kabat-icon.png";
import tv_icon from "./imges/tv-icon.png";
import shoe_icon from "./imges/shoe-icon.png";
import study_icon from "./imges/study-icon.png";
import coffe_icon from "./imges/coffe-icon.png";
import door_icon from "./imges/door-icon.png";
import Why_choose_use from "./imges/why-choose-us-img.jpg";
import yellow_dot from "./imges/dots-yellow.svg";
import why_img_one from "./imges/why-img-1.svg";
import why_img_two from "./imges/why-img-2.svg";
import why_img_three from "./imges/why-img-3.svg";
import why_img_four from "./imges/why-img-4.svg";
import Store_hydrabad from "./imges/store-Hyderabad.png";
import Store_Kochi from "./imges/store-Kochi.png";
import Store_Kolkata from "./imges/store-Kolkata.png";
import Store_Bangloe from "./imges/store-Bangloe.png";
import Store_Delhi from "./imges/store-Delhi.png";
import Store_Mumbai from "./imges/store-Mumbai.png";

const Home = () => {
  // slider1
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Store_hydrabad,
      title: "Hyderabad",
      stores: "6 stores",
    },
    {
      image: Store_Kochi,
      title: "Chennai",
      stores: "3 stores",
    },
    {
      image: Store_Kolkata,
      title: "Pune",
      stores: "2 stores",
    },
    {
      image: Store_Mumbai,
      title: "Mumbai",
      stores: "4 stores",
    },
    {
      image: Store_Bangloe,
      title: "Bangalore",
      stores: "5 stores",
    },
    {
      image: Store_Delhi,
      title: "Delhi",
      stores: "7 stores",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 2 : prevSlide - 2
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 2 ? 0 : prevSlide + 2
    );
  };
  // slider 2

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container mainnavbar">
          <ul>
            <li className="logo">Homebound.</li>
          </ul>
          <p></p>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0 navtxt">
              <li className="nav-item ml">Home</li>
              {/* Dropdown menu for "About us" with hover effect */}
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">Sofa</li>
                  <li className="dropdown-item">Chair</li>
                  <li className="dropdown-item">Bed</li>
                </ul>
              </li>
              <li className="nav-item ataguse">Store</li>
              <li className="nav-item">Contact us</li>
            </ul>
            {/* stop */}
            <ul className="navbutton mt-3">
              <li>
                <button type="button" className="btn btn-light loginhvr">
                  Login
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-outline-light loginhvr"
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

      {/* Hero */}
      <div className="mainhero">
        <div className="hero container">
          <div className="herotext ">
            <div className="herotxtone">Modern Interior Design Studio</div>
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

      <br />
      <br />
      <br />

      {/* Section 1 */}
      <div className="sectionone">
        <div className="Explore">
          <p id="Shop">Explore Our Furniture Range</p>
          <p className="line"></p>
        </div>
        <div className="seconemainbox container">
          {/* First Icon Row */}
          <div className="lineoneicon">
            <div className="bestdeal">
              <img src={best_deal} alt="Best Deal" title="Best Deal" />
              <p className="dealzonetxt mt-2">Deal Zone</p>
            </div>
            <div className="bestdeal">
              <img src={store_icon} alt="Store" title="Store" />
              <p className="dealzonetxt mt-2">Store</p>
            </div>
            <div className="bestdeal">
              <img src={sofa_icon} alt="Sofa" title="Sofa" />
              <p className="dealzonetxt mt-2">Sofa</p>
            </div>
            <div className="bestdeal">
              <img src={bed_icon} alt="Bed" title="Bed" />
              <p className="dealzonetxt mt-2">Bed</p>
            </div>
            <div className="bestdeal">
              <img src={chair_icon} alt="Chair" title="Chair" />
              <p className="dealzonetxt mt-2">Chair</p>
            </div>
            <div className="bestdeal">
              <img src={dining_table} alt="Dining Table" title="Dining Table" />
              <p className="dealzonetxt mt-2">Dining Table</p>
            </div>
          </div>
          {/* Second Icon Row */}
          <div className="lineoneicon">
            <div className="bestdeal">
              <img src={Wardrobes_icon} alt="Wardrobes" title="Wardrobes" />
              <p className="dealzonetxt mt-2">Wardrobe</p>
            </div>
            <div className="bestdeal">
              <img src={tv_icon} alt="TV" title="TV" />
              <p className="dealzonetxt mt-2">TV Units</p>
            </div>
            <div className="bestdeal">
              <img src={shoe_icon} alt="Shoe Rack" title="Shoe Rack" />
              <p className="dealzonetxt mt-2">Shoe Racks</p>
            </div>
            <div className="bestdeal">
              <img src={study_icon} alt="Study Table" title="Study Table" />
              <p className="dealzonetxt mt-2">Study Table</p>
            </div>
            <div className="bestdeal">
              <img src={coffe_icon} alt="Coffee Table" title="Coffee Table" />
              <p className="dealzonetxt mt-2">Coffee Table</p>
            </div>
            <div className="bestdeal">
              <img src={door_icon} alt="Door" title="Door" />
              <p className="dealzonetxt mt-2">Door</p>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 WHy choose Us */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="sectiontwomain">
        <div className="sectiontwo container">
          <div className="whysec">
            <div className="why">
              <p className="whyfirstchild"> Why Choose Us</p>
              <p className="whysecondchild">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
            {/* truck section */}

            <div className="fandfsection">
              {/* truck 1 */}
              <div className="fandf">
                <p className="truckimg">
                  <img src={why_img_one} alt="" />
                </p>
                <p className="troukround"></p>
                <p className="fandftxtone">Fast & Free Shipping</p>
                <p className="fandftxttwo">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              {/* truck 2 */}
              <div className="fandf">
                <p className="truckimg">
                  <img src={why_img_two} alt="" />
                </p>
                <p className="troukround"></p>
                <p className="fandftxtone">Fast & Free Shipping</p>
                <p className="fandftxttwo">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="fandfsection">
              {/* truck 3 */}
              <div className="fandf">
                <p className="truckimg">
                  <img src={why_img_three} alt="" />
                </p>
                <p className="troukround"></p>
                <p className="fandftxtone">Fast & Free Shipping</p>
                <p className="fandftxttwo">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              {/* truck 4 */}
              <div className="fandf">
                <p className="truckimg">
                  <img src={why_img_four} alt="" />
                </p>
                <p className="troukround"></p>
                <p className="fandftxtone">Fast & Free Shipping</p>
                <p className="fandftxttwo">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            {/* truck end */}
          </div>
          {/* img section */}
          <div className="whyimgsec">
            <div className="whyimgtwo">
              <img src={yellow_dot} alt="" />
            </div>
            <div className="whyimgone">
              <img src={Why_choose_use} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* section 2 WHy choose Us end*/}

      {/* slider balck */}
      {/* Slider Section */}
      {/* Other sections of the component */}

      {/* Slider Section */}
      <div className="slider container">
        <h2 className="slider-title">Visit Our Stores</h2>
        <div className="slider-container">
          <div className="slider-arrow prev" onClick={handlePrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#ff6347" }} // Red color for prev button
            >
              <path d="M15.41 7.41L14 6 6 12l8 8 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div className="slider-slide">
            <div
              className="slides-wrapper"
              style={{
                transform: `translateX(-${currentSlide * (80 / 6)}%)`,
                width: `${slides.length * (100 / 6)}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="slide-item"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <img
                    className="sliderimg"
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-arrow next" onClick={handleNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#4682b4" }} // Blue color for next button
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>
      </div>
      {/* slider black */}
    </>
  );
};

export default Home;
