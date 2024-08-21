import React from "react";
import shoping_icon from "./imges/cart.svg";
import hero_img from "./imges/hero-img.png";
import dot_green from "./imges/dots-green.svg";
import chaire_one from "./imges/chaire-1.png";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container mainnavbar">
          <p className="logo">Homebound.</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navtxt">
              <li className="nav-item ml">Home</li>
              <li className="nav-item">Shop</li>
              <li className="nav-item">About us</li>
              <li className="nav-item">Service</li>
              <li className="nav-item">Blog</li>
              <li className="nav-item">Contact us</li>
            </ul>
            <ul className="navbutton mt-3">
              <li>
                <button type="button" class="btn btn-light loginhvr">
                  Login
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-outline-light loginhvr">
                  Sign up
                </button>
              </li>
              <li className="nav-item card-icon">
                <img
                  src={shoping_icon}
                  alt="Shoping-icon"
                  title="Shoping-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
              <button type="button" class="btn btn-light rounded-pill">
                Shop Now
              </button>
              <button type="button" class="btn btn-outline-light rounded-pill">
                Explore
              </button>
            </div>
          </div>
          <div className="heroimg">
            <img src={dot_green} alt="" className="dotgreen" />
            <img src={hero_img} alt="" className="sofa" />
          </div>
        </div>
      </div>
      {/* Hero */}
      <br />
      <br />
      <br />
      {/* section 1  */}
      <div className="sectionone">
        <div className="fourcomponent container">
          {/* <div className="firsttxt mt-5">
            <div className="craft">Crafted with excellent material.</div>
            <div className="donec">
              <br />
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </div>
            <br />
            <div className="craftbtn">
              <button type="button" class="btn btn-dark rounded-pill">
                Explore
              </button>
            </div>
          </div> */}
          <div className="chairone">
            <div className="chairimg">
              <img src={chaire_one} alt="chaire-1" title="cahire-1" />
              <div className="mt-3">
                <p className="chairename">Nordic Chaire</p>
                <p className="chaireprice">$50.00</p>
              </div>
            </div>
            <div className="chairehover">
              <div className="addbutton">
                <i class="fa-solid fa-circle-plus"></i>
              </div>
            </div>
          </div>
          <div className="chairone">
            <div className="chairimg ">
              <img src={chaire_one} alt="chaire-1" title="cahire-1" />
              <div className="chairehover"></div>
            </div>
          </div>
          <div className="chairone">
            <div className="chairimg">
              <img src={chaire_one} alt="chaire-1" title="cahire-1" />
            </div>
            <div className="chairehover"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
