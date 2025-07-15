import React, { useState } from "react";
// import "./AccountTypeSelection.css";
import { FaUser, FaHome, FaTools } from "react-icons/fa";
import Illustration from "../assest/image.png"; 

const AccountTypeSelection = () => {
  const [selected, setSelected] = useState("Tenant");

  const options = [
    {
      label: "Tenant",
      description: "Find a place & pay rent online.",
      icon: <FaUser size={20} color="#007bff" />,
    },
    {
      label: "Landlord",
      description: "Accept rent online & manage rental.",
      icon: <FaHome size={20} color="#007bff" />,
    },
    {
      label: "Service Pro",
      description: "Manage requests from landlords & find new jobs.",
      icon: <FaTools size={20} color="#007bff" />,
    },
  ];

  return (
    <div className="account-outer-container">
      <div className="account-container">
        <img
          src={Illustration} alt="illustration" className="account-img"
          />
        <h2 className="account-title">Account Type</h2>
        <p className="account-description">
          Choose the account type that suits your needs. <br />
          Each has a different set of tools and features.
        </p>

        <div className="account-options">
          {options.map((option) => (
            <div
              key={option.label}
              className={`account-card ${
                selected === option.label ? "selected" : ""
              }`}
              onClick={() => setSelected(option.label)}
            >
              <div className="account-radio">
                {option.icon}
                <span className="account-label">{option.label}</span>
                <input
                  type="radio"
                  checked={selected === option.label}
                  onChange={() => setSelected(option.label)}
                />
              </div>
              <p className="account-description-text">{option.description}</p>
            </div>
          ))}
        </div>

        <button className="account-button">Next</button>
      </div>
    </div>
  );
};

export default AccountTypeSelection;
