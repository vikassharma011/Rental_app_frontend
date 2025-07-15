import React from "react";
// import "../styles/Header.css"; // Optional

const Header = () => {
  return (
    <header className="topbar">
      <div className="language">🌐 English</div>
      <div className="profile">
        <img
          src="https://i.ibb.co/LJ7S1Rg/profile.png" alt="User" className="profile-img"
        />
        <div className="profile-text">
          <div className="name">kamrul</div>
          <div className="tid">TID: 23545</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
