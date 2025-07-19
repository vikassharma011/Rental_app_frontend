// src/page/profile/ProfilePage.js
import React from "react";
import { useNavigate } from "react-router-dom"; //  Import for navigation

const ProfilePage = () => {
  const navigate = useNavigate(); //  Hook for back navigation

  return (
    <div className="profile-page-container">
      <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button> {/* 🟢 Back Button */}

      <h2>My Profile</h2>
      <div className="profile-card">
        <img
          src="https://i.ibb.co/LJ7S1Rg/profile.png"
          alt="User"
          className="profile-photo"
        />
        <div className="profile-details">
          <p><strong>Name:</strong> Kamrul Hasan</p>
          <p><strong>Email:</strong> kamrul@example.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Tenant ID:</strong> TID: 23545</p>
          <p><strong>Address:</strong> Flat 402, Lotus Residency, Mumbai</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
