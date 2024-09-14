import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import hero_img from "./imges/hero-img.png";
import dot_green from "./imges/dots-green.svg";
// import sofa_one from "./imges/sofa-1.png";
import axios from "axios";

const Sofa = () => {
  const [sofas, setSofa] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/sofa/get")
      .then((response) => {
        console.log(response.data); // Log the response for debugging
        setSofa(response.data.data); // Adjust according to your API response structure
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
      {/* hero */}
      <div className="mainhero">
        <div className="hero container">
          <div className="herotext ">
            <div className="herotxtone">Modern Interior Design Sofa</div>
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
      {/* product section */}
      <h1 className="sofa-set">Sofa Set</h1>
      {/* card */}
      <div className="main-card">
        <div className="card-container container">
          {loading ? ( // Show loading indicator while data is being fetched
            <h2>Loading sofas...</h2>
          ) : Array.isArray(sofas) && sofas.length > 0 ? ( // If not loading, check if sofas exist
            sofas.map((sofa) => (
              <div className="card" key={sofa._id}>
                <img
                  src={`https://53w357tb-4000.inc1.devtunnels.ms/sofa/img/${sofa.poster}`}
                  alt={sofa.sofa_name}
                />
                <div className="card-item-name">
                  <p className="product-name">
                     {sofa.sofa_name}
                  </p>
                  <p>
                    From. <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {sofa.price} &nbsp;
                    <del>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {sofa.option}
                    </del>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h2>No sofas available</h2> // If sofas is empty or undefined
          )}
        </div>
      </div>
      {/* second card */}
      {/* hero */}

      <Footer />
    </>
  );
};

export default Sofa;
