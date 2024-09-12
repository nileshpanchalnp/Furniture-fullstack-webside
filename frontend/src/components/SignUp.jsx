import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container mt-4 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card-login ">
              <div className="card-login-body p-5">
                <h2 className="text-uppercase text-center mb-4">
                  Artful Interiors.
                </h2>
                <h5 className="text-uppercase text-center mb-5">
                  Create an account
                </h5>
                <form>
                  <div
                    data-mdb-input-init=""
                    className="form-outline mb-4 d-flex flex-row gap-3"
                  >
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                      placeholder="Enter your Firs name"
                    />{" "}
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                      placeholder="Enter your Last name"
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                      placeholder="Enter your Username"
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4cdg"
                      className="form-control form-control-lg"
                      placeholder="Repeat your password"
                    />
                  </div>

                  <div className="d-flex justify-content-center ">
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="signup-btn btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Register
                    </button>
                  </div>
                  <p className="text-center  mt-4 mb-0">
                    Have already an account?{" "}
                    <Link to="/login" className="fw-bold ">
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
};

export default SignUp;
