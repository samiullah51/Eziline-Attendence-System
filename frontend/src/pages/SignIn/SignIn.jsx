import React from "react";
import "./SignUp.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="sign__up">
      <img src={logo} alt="" />
      {/* form */}
      <div className="signup__form">
        <h1>Login</h1>

        <div className="single__input">
          <label htmlFor="">Email</label>
          <input type="text" autoFocus />
        </div>
        <div className="single__input">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>

        <div className="single__input">
          <button>Login </button>
        </div>

        <div className="footer">
          <p>Don't have account</p>
          <Link>Create here</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
