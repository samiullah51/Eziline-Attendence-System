import React from "react";
import "./SignUp.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="sign__up">
      <img src={logo} alt="" />
      {/* form */}
      <div className="signup__form">
        <h1>Create New Account</h1>
        <div className="single__input">
          <label htmlFor="">Full Name</label>
          <input type="text" autoFocus />
        </div>
        <div className="single__input">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="single__input">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div className="single__input">
          <label htmlFor="">Confirm Password</label>
          <input type="password" />
        </div>
        <div className="single__input">
          <button>Register Now</button>
        </div>

        <div className="footer">
          <p>Already have an account</p>
          <Link>Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
