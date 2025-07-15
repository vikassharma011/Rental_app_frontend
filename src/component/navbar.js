import React from "react";
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
        <li>Property</li>
        <li>Tenants</li>
        <li>Add Property</li>
        <li>Maintainer</li>
        <li>Contacts</li>
      </ul>
    </aside>
  );
};

export default Navbar;
