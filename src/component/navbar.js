import React, { useState } from "react";
// import "./Navbar.css"; // Make sure you have this CSS file

const Navbar = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="menu-btn" onClick={toggleMenu}>
        ☰
      </div>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">RMS</div>
        <ul>
          <li onClick={() => onSelect("dashboard")}>Dashboard</li>
          <li onClick={() => onSelect("property")}>Property</li>
          <li onClick={() => onSelect("tenants")}>Tenants</li>
          <li onClick={() => onSelect("supplier")}>Supplier</li>
          <li onClick={() => onSelect("maintainer")}>Maintainer</li>
          <li onClick={() => onSelect("reports")}>Reports</li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
