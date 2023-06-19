import React from "react";
import "./styles/SignUp.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top">
        <div className="container">
          <div className="inputs-div">
            <h1>Sign Up</h1>
            <input
              type="text"
              className="inputs"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="inputs"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="inputs"
              name="password"
              placeholder="Password"
            />

            <input
              type="password"
              className="inputs"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button type="submit" className="createbtn">
              Create Account
            </button>

            <div className="terms-div">
              By signing up, you agree to the
              <a className="termslink" href="#">
                Privacy Policy
              </a>
            </div>

            <div className="already-div">
              Already have an account?
              <button
                className="already-link"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
