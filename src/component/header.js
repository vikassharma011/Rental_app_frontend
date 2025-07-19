import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this line

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate(); // ✅ Add this line

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="topbar">
      <div className="menu-btn" onClick={toggleSidebar}>☰</div>

      <div className="language">🌐 English</div>

      <div
        className="profile"
        ref={profileRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          src="https://i.ibb.co/LJ7S1Rg/profile.png"
          alt="User"
          className="profile-img"
        />
        <div className="profile-text">
          <div className="name">kamrul</div>
          <div className="tid">TID: 23545</div>
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="profile-dropdown">
            <div onClick={() => navigate("/profile")}>My Profile</div> {/* ✅ Navigate */}
            <div onClick={() => alert("Logout logic yahan daalein")}>Logout</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
