import React from "react";
import Navbar from "../../../component/navbar";
import Header from "../../../component/header";
import { Outlet } from "react-router-dom";

const InvestorDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <main className="dashboard-content">
        <Header />
         {/* Main content from nested routes will render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default InvestorDashboard;
