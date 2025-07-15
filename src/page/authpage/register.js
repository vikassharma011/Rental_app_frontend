import React, { useState } from "react";
import EyeIcon from "../../assest/eye.png"; 
// import "./App.css"; // Make sure CSS file is in same folder or adjust path
// import logo from "../assets/logo.png"; // Replace with your logo image

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="app-container">
      <div className="register-box">
        {/* Logo Section */}
        <div className="logo-section">
          {/* <img src={logo} alt="Logo" className="logo-img" /> */}
          <h2 className="logo-text">TMS</h2>
        </div>

        <h3 className="welcome">Welcome to</h3>
        <h2 className="title">Tenant Management System</h2>
        <p className="desc">Enter your information below to continue</p>

        {/* Form */}
        <form>
          <label>Email</label>
          <input type="email" placeholder="yashraj@gmail.com" />

          <div className="row">
            <div>
              <label>First name</label>
              <input type="text" placeholder="Yashraj" />
            </div>
            <div>
              <label>Last name</label>
              <input type="text" placeholder="Singh Parihar" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Create Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />
                <img
                  src={EyeIcon}
                  alt="Show Password"
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <div>
              <label>Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="********"
                />
                <img
                  src={EyeIcon}
                  alt="Show Confirm Password"
                  className="eye-icon"
                  onClick={() => setShowConfirm(!showConfirm)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="register-btn">Create Account</button>
           <p className="register-link">
          Already have an account <a href="/login">Login Now</a>
        </p>
        </form>
        
      </div>
    </div>
  );
};

export default RegisterForm;
