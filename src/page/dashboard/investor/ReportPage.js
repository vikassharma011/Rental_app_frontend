import React from "react";


const ReportPage = () => {
  return (
    <div className="report-container">
      <h2>📊 Investor Reports</h2>

      <div className="report-section">
        <h3>🏠 Occupancy Report</h3>
        <p>View occupancy by property or city.</p>
        <div className="export-buttons">
          <button className="export-btn pdf">Export PDF</button>
          <button className="export-btn excel">Export Excel</button>
        </div>
      </div>

      <div className="report-section">
        <h3>🛠️ Maintenance Report</h3>
        <p>View open, completed, and overdue tasks.</p>
        <div className="export-buttons">
          <button className="export-btn pdf">Export PDF</button>
          <button className="export-btn excel">Export Excel</button>
        </div>
      </div>

      <div className="report-section">
        <h3>💰 Payment Report</h3>
        <p>Track who paid, how much, and timeliness.</p>
        <div className="export-buttons">
          <button className="export-btn pdf">Export PDF</button>
          <button className="export-btn excel">Export Excel</button>
        </div>
      </div>

      <div className="report-section">
        <h3>📅 Lease Expiry Report</h3>
        <p>See upcoming lease renewals and expiry dates.</p>
        <div className="export-buttons">
          <button className="export-btn pdf">Export PDF</button>
          <button className="export-btn excel">Export Excel</button>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
