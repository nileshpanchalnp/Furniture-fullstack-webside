import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import person_1 from "./imges/person-1.jpg";
import person_2 from "./imges/person-2.jpg";
import person_3 from "./imges/person-3.jpg";
import Footer from "./footer/Footer";
import Navbar from "./Navbar";

const Home = () => {
  // page Navigation
  // back to top button
  // Get the button
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };
  // back to top button
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
  // slldier one
  const [currentSlidetwo, setCurrentSlidetwo] = useState(0);

  const nextSlidetwo = () => {
    setCurrentSlidetwo(
      (prevSlidetwo) => (prevSlidetwo + 1) % testimonials.length
    );
  };

  const prevSlidetwo = () => {
    setCurrentSlidetwo((prevSlidetwo) =>
      prevSlidetwo === 0 ? testimonials.length - 1 : prevSlidetwo - 1
    );
  };
  // slider one end
  // slidertwo
  const testimonials = [
    {
      name: "Maria Jones",
      title: "CEO, Co-Founder, XYZ Inc.",
      quote:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: person_1,
    },
    {
      name: "John Doe",
      title: "CTO, ABC Corp.",
      quote:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: person_2,
    },
    {
      name: "Jane Smith",
      title: "CMO, Example Co.",
      quote:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque. convallis volutpat dui quis scelerisque."',
      image: person_3,
    },
  ];
  // slidertwo

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
  // slider 2 end

  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* navbar */}
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
      {/* back to top button */}
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <i className="fa-solid fa-circle-up" />
      </button>

      {/* back to top button */}

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
              <Link to="/store" className="no-underline">
                <img src={store_icon} alt="Store" title="Store" />
                <p className="dealzonetxt mt-2 link-page">Store</p>
              </Link>
            </div>
            <div className="bestdeal">
              <Link to="/sofa" className="no-underline">
                <img src={sofa_icon} alt="Sofa" title="Sofa" />
                <p className="dealzonetxt mt-2 link-page">Sofa</p>
              </Link>
            </div>
            <div className="bestdeal">
              <Link to="/bed" className="no-underline">
                <img src={bed_icon} alt="Bed" title="Bed" />
                <p className="dealzonetxt mt-2 link-page">Bed</p>
              </Link>
            </div>
            <div className="bestdeal">
              <Link to="/chair" className="no-underline">
                <img src={chair_icon} alt="Chair" title="Chair" />
                <p className="dealzonetxt mt-2 link-page">Chair</p>
              </Link>
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

      <div className="slider container mt-5 pt-3">
        <h2 className="slider-title">Visit Our Stores</h2>
        <div className="slider-container">
          <div className="slider-arrow prev" onClick={handlePrev}>
            <img
              src="https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Circle-Chevron-Left-icon.png"
              alt=""
              style={{ height: "34px", width: "34px" }}
            />
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#ff6347" }} // Red color for prev button
            >
              <path d="M15.41 7.41L14 6 6 12l8 8 1.41-1.41L10.83 12z" />
            </svg> */}
          </div>
          <div className="slider-slide">
            <div
              className="slides-wrapper"
              style={{
                transform: `translateX(-${currentSlide * (100 / 6)}%)`,
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
            <img
              src="https://img.favpng.com/14/0/12/arrow-computer-icons-circle-clip-art-png-favpng-UqEzz51y7usvsrFfBsFntUDkY_t.jpg"
              style={{ height: "34px", width: "34px" }}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slider black */}

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

      {/* section 2 WHy choose Us end*/}
      {/* Slider Section */}

      {/* slider two */}
      <h1 className="Testimonials">Testimonials</h1>
      <div className="slidertwo">
        <div className="slidetwo">
          <div className="testimonial">
            <img
              src={testimonials[currentSlidetwo].image}
              alt={testimonials[currentSlidetwo].name}
            />
            <h3>{testimonials[currentSlidetwo].name}</h3>
            <p>{testimonials[currentSlidetwo].title}</p>
            <p className="quote">{testimonials[currentSlidetwo].quote}</p>
          </div>
        </div>
        <button className="prevtwo" onClick={prevSlidetwo}>
          &lt;
        </button>
        <button className="nexttwo" onClick={nextSlidetwo}>
          &gt;
        </button>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={index === currentSlidetwo ? "dot active" : "dot"}
              onClick={() => setCurrentSlidetwo(index)}
            />
          ))}
        </div>
      </div>
      {/* slider two end*/}
      {/* section 4 we are helping model design*/}

      {/* section 4 end */}
      <br />
      <br />
      <br />
      <br />
      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
};

export default Home;
