import React, { useState } from "react";
import Navbar from "../../../component/navbar";
import Header from "../../../component/header";
import PropertyPage from "./PropertyPage";
import TenantPage from "./TenantPage"; // ✅ Step 1: Import the TenantPage
import SupplierPage from "./SupplierPage";
import MaintainerPage from "./MaintainerPage";
import ReportPage from "./ReportPage";

const InvestorDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  // ✅ Step 2: Add support for "tenants" in renderContent
  const renderContent = () => {
      if (selectedPage === "property") {
        return <PropertyPage />;
      } else if (selectedPage === "tenants") {
        return <TenantPage />;
      } else if (selectedPage === "supplier") {
        return <SupplierPage />;
      } else if (selectedPage === "maintainer") {
    return <MaintainerPage />;
      } else if (selectedPage === "reports") {
        return <ReportPage />;
      }

    // Default dashboard content
    return (
      <div className="dashboard-section">
        <h2>DASHBOARD</h2>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card"><p>Total Property</p><h3>45</h3></div>
          <div className="card"><p>Total Unit</p><h3>142</h3></div>
          <div className="card"><p>Total Income</p><h3>$56456.00</h3></div>
          <div className="card"><p>Total Expense</p><h3>$26456.00</h3></div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Payment History */}
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

          {/* Maintenance Status */}
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
      <Navbar onSelect={setSelectedPage} />
      <main className="dashboard-content">
        <Header />
        {renderContent()}
      </main>
    </div>
  );
};

export default InvestorDashboard;
