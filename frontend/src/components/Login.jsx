import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        username,
        password,
      });

      if (response.data.token) {
        // Store the JWT token in localStorage
        localStorage.setItem("token", response.data.token);
        console.log("token", response.data.token);
        console.log("Login user", response.data.user.username);
        var User = response.data.user.username;
        Cookies.set("User", User);
        alert("Login successful!");

        // Redirect to a different page, e.g., dashboard or home
        navigate("/home"); // Adjust this path based on your routes
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Login error: ", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card-login ">
              <div className="card-login-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                  Artful Interiors.
                </h2>
                <h5 className="text-uppercase text-center mb-5">
                  Login to Your Account
                </h5>
                <form onSubmit={handleLogin}>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                      placeholder="Enter your Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-flex justify-content-center ">
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="signup-btn btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-center  mt-5 mb-0">
                    Don't have an account?{" "}
                    <Link to="/" className="fw-bold ">
                      <u>SignUp here</u>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
