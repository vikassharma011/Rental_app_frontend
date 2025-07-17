import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Navbar.css"; // Optional, if you're using a separate CSS file

const Navbar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        {/* <img src="/assets/logo.png" alt="Logo" className="logo-img" />  */}
        <span>TMS</span>
      </div>
      <ul>
        <li>Dashboard</li>
        <li><Link to="/investor/properties">Properties</Link></li>
        <li><Link to="/investor/profile">Profile</Link></li>
        <li>Tenants</li>
        <li>Add Property</li>
        <li>Maintainer</li>
        <li>Contacts</li>
      </ul>
    </aside>
  );
};

export default Navbar;
