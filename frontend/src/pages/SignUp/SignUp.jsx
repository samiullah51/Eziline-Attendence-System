import React from "react";
import "./SignUp.css";
import logo from "../../assets/logo.png";
function SignUp() {
  return (
    <div className="sign__up">
      <img src={logo} alt="" />
      {/* form */}
      <div className="signup__form">
        <h2>Create New Account</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          cupiditate repellendus accusamus possimus doloremque officia vero
          reprehenderit ad qui voluptas, obcaecati odio magni laborum sequi,
          quos, voluptatum corporis maxime provident.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
