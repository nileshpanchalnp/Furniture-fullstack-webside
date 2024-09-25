import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const CreateUser = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = {
      firstname,
      lastname,
      username,
      email,
      password,
    };

    try {
      await axios.post(
        "https://53w357tb-4000.inc1.devtunnels.ms/user/register/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Reset form fields
      setFirstName("");
      setLastName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");

      // Display success alert and navigate to home page
      alert("Registration Success");
      navigate("/login"); // Navigate to home page after successful registration
    } catch (error) {
      console.error("Error:", error);
      alert("User could not be created. Please try again.");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card-login">
              <div className="card-login-body p-5">
                <h2 className="text-uppercase text-center mb-4">
                  Artful Interiors.
                </h2>
                <h5 className="text-uppercase text-center mb-5">
                  Create an account
                </h5>
                <form onSubmit={CreateUser}>
                  <div className="form-outline mb-4 d-flex flex-row gap-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your First name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your Last name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your Username"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  {/* Display error message if passwords don't match */}
                  {error && <p className="text-danger">{error}</p>}

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="signup-btn btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Register
                    </button>
                  </div>
                  <p className="text-center mt-4 mb-0">
                    Already have an account?{" "}
                    <Link to="/login" className="fw-bold">
                      <u>Login here</u>
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
}

export default SignUp;
