import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ Yeh zaroori hai
import Navbar from "../../../component/navbar";
import Header from "../../../component/header";
import PropertyPage from "./PropertyPage";
import TenantPage from "./TenantPage";
import SupplierPage from "./SupplierPage";
import MaintainerPage from "./MaintainerPage";
import ReportPage from "./ReportPage";
import ProfilePage from "./ProfilePage"; // ✅ Import ProfilePage

const InvestorDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation(); // ✅ Get current path

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleSelectPage = (page) => {
    setSelectedPage(page);
    setIsSidebarOpen(false);
  };

  // ✅ Check if route is /investor/profile
  const isProfileRoute = location.pathname === "/investor/profile";

  const renderContent = () => {
    if (isProfileRoute) return <ProfilePage />; // ✅ This supports direct route
    if (selectedPage === "property") return <PropertyPage />;
    else if (selectedPage === "tenants") return <TenantPage />;
    else if (selectedPage === "supplier") return <SupplierPage />;
    else if (selectedPage === "maintainer") return <MaintainerPage />;
    else if (selectedPage === "reports") return <ReportPage />;

    return (
      <div className="dashboard-section">
        <h2>DASHBOARD</h2>
        <div className="summary-cards">
          <div className="card"><p>Total Property</p><h3>45</h3></div>
          <div className="card"><p>Total Unit</p><h3>142</h3></div>
          <div className="card"><p>Total Income</p><h3>$56456.00</h3></div>
          <div className="card"><p>Total Expense</p><h3>$26456.00</h3></div>
        </div>
        <div className="bottom-section">
          <div className="box payment-history">
            <h4>Payment History</h4>
            <table>
              <thead>
                <tr><th>Payment Date</th><th>Amount</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>Sep 2023</td><td>$4568.00</td><td>Paid</td></tr>
                <tr><td>Oct 2023</td><td>$4568.00</td><td>Paid</td></tr>
                <tr><td>Nov 2023</td><td>$4568.00</td><td>Paid</td></tr>
              </tbody>
            </table>
            <button className="invoice-btn">See Invoices</button>
          </div>
          <div className="box maintenance-status">
            <h4>Maintenance Status</h4>
            <ul>
              <li>Request #001 <span className="status in-progress">In Progress</span></li>
              <li>Request #002 <span className="status completed">Completed</span></li>
              <li>Request #002 <span className="status pending">Pending</span></li>
            </ul>
            <div className="tools-icon">🔧</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-wrapper">
      <Navbar onSelect={handleSelectPage} isOpen={isSidebarOpen} />
      <main className="dashboard-content">
        <Header toggleSidebar={toggleSidebar} />
        {renderContent()}
      </main>
    </div>
  );
};

export default InvestorDashboard;
