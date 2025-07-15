import React, { useState } from "react";
import GoogleIcon from "../../assest/Google.png";
import FacebookIcon from "../../assest/Facebook.png";
import EyeIcon from "../../assest/eye.png"; 
// import axios from "axios";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="app-container">
      <div className="login-box">
        {/* Logo Section */}
        <div className="logo-section">
          <h2 className="logo-text">TMS</h2>
        </div>

        <h3 className="welcome">Welcome to</h3>
        <h2 className="title">Tenant Management System</h2>
        <p className="desc">Please login your account.</p>

        {/* Form */}
        <form>
          <label>Email</label>
          <input type="email" placeholder="yashraj@gmail.com" />

          <label>Password</label>
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

          <div className="row-between">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a className="forgot-link" href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Log In</button>
        </form>

        <div className="divider">Or Continue With</div>

        <div className="social-buttons">
          <div className="social-btn">
            <img src={GoogleIcon} alt="Google" className="social-icon" />
          </div>
          <div className="social-btn">
            <img src={FacebookIcon} alt="Facebook" className="social-icon" />
          </div>
        </div>

        <p className="register-link">
          New member here? <a href="/register">Register Now</a>
        </p>
      </div>
    </div>
  );
};

// const data = {
//   email: "yashraj@gmail.com",
//   password: "12345678"
// };

// Replace with your actual backend URL
// const apiUrl = "http://localhost:5000/api/login"; // Example: login route

// axios.post(apiUrl, data)
//   .then(response => {
//     console.log("Login Successful:", response.data);
//   })
//   .catch(error => {
//     console.error("Login Failed:", error.response?.data || error.message);
//   });

export default LoginForm;
