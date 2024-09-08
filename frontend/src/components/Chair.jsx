import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import daco from "./imges/Daco_6032921.png"
import chair_hero from "./imges/chair-hero.png";

// import hero_img from "./imges/hero-img.png";
import dot_green from "./imges/dots-green.svg";

const Chair = () => {
  const [chairs, setChairs] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/chair/get")
      .then((response) => {
        console.log(response.data); // Log the response for debugging
        setChairs(response.data.data); // Adjust according to your API response structure
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="mainhero">
        <div className="hero container">
          <div className="herotext ">
            <div className="herotxtone">
              Modern Interior <br /> Design Chair
            </div>
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
            <img src={chair_hero} alt="Hero chair" title="hero chair"  className="sofa chair-h-w" />
          </div>
        </div>
      </div>
      {/* Hero */}
      <h1 className="sofa-set">Chairs</h1>
      {/* Card */}
      <div className="main-card">
        <div className="card-container container">
          {loading ? ( // Show loading message if data is still being fetched
            <h2>Loading Chairs...</h2>
          ) : (
            chairs.map((chair) => (
              <div className="card" key={chair._id}>
                <img
                  src={`https://53w357tb-4000.inc1.devtunnels.ms/chair/img/${chair.poster}`}
                  alt={chair.chair_name}
                />
                <div className="card-item-name">
                  <p className="product-name ">
                     {chair.chair_name}
                  </p>
                  <p>
                    From. <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {chair.price} &nbsp;
                    <del>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {chair.option}
                    </del>{" "}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Chair;
