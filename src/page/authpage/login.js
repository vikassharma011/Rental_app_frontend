import React, { useState } from "react";
import axios from "axios";
import GoogleIcon from "../../assest/Google.png";
import FacebookIcon from "../../assest/Facebook.png";
import EyeIcon from "../../assest/eye.png";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMsg("");
  setLoading("");

  try {
    const response = await axios.post(
      "https://rentalappbackend-production.up.railway.app/auth/login",
      { email, password }
    );

    const { token } = response.data;

    //  Decode payload from token (middle part)
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const role = decodedPayload.role;

    //  Store in localStorage
    localStorage.setItem("token", token);
    // localStorage.setItem("role", role);

    //  Navigate based on role
    if (role === "investor") {
      navigate("/investor");
    } else if (role === "tenant") {
      navigate("/tenant-dashboard");
    } else {
      navigate("/");
    }

  } catch (error) {
    console.error("Login failed:", error);
    setErrorMsg(error?.response?.data?.message || "Invalid credentials");
  }
};



  return (
    <div className="app-container">
      <div className="login-box">
        <div className="logo-section">
          <h2 className="logo-text">RMS</h2>
        </div>

        <h3 className="welcome">Welcome to</h3>
        <h2 className="title">Rental Management System</h2>
        <p className="desc">Please login your account.</p>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="yashraj@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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

          {errorMsg && <div className="error-msg">{errorMsg}</div>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
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

export default LoginForm;
