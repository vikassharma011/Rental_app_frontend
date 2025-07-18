import React, { useState } from "react";

const sampleSuppliers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    company: "FixIt Pvt Ltd",
    tasksCompleted: 18,
    avgResponseTime: "2h",
    lowStockItems: ["PVC Pipe", "Switch Board"],
    lastReplaced: "2024-12-12",
    is_active: true,
  },
  {
    id: 2,
    name: "Sita Devi",
    company: "RepairPro",
    tasksCompleted: 25,
    avgResponseTime: "1h 30m",
    lowStockItems: ["Wire", "Screws"],
    lastReplaced: "2025-06-01",
    is_active: true,
  },
];

const pendingRequests = [
  { id: 101, name: "Vikram Yadav", email: "vikram@joinme.com", company: "HandyMan" },
  { id: 102, name: "Anita Sharma", email: "anita@fixall.com", company: "FixAll Services" },
];

const SupplierPage = () => {
  const [suppliers, setSuppliers] = useState(sampleSuppliers);
  const [requests, setRequests] = useState(pendingRequests);

  const approveSupplier = (id) => {
    const updated = requests.filter((req) => req.id !== id);
    setRequests(updated);
    alert("Supplier approved!");
  };

  const rejectSupplier = (id) => {
    const updated = requests.filter((req) => req.id !== id);
    setRequests(updated);
    alert("Supplier rejected.");
  };

  const reassignTask = (supplier) => {
    alert(`Task reassigned from ${supplier.name}`);
  };

  return (
    <div className="supplier-container">
      <h2>Supplier Management</h2>

      {/* Supplier Performance */}
      <div className="section">
        <h3>Supplier Performance</h3>
        <table className="supplier-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Tasks Completed</th>
              <th>Avg Response Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((sup) => (
              <tr key={sup.id}>
                <td>{sup.name}</td>
                <td>{sup.company}</td>
                <td>{sup.tasksCompleted}</td>
                <td>{sup.avgResponseTime}</td>
                <td>
                  <button onClick={() => reassignTask(sup)}>🔁 Reassign</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inventory Report */}
      <div className="section">
        <h3>Inventory Reports</h3>
        <table className="supplier-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Low Stock Items</th>
              <th>Last Replaced</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((sup) => (
              <tr key={sup.id}>
                <td>{sup.name}</td>
                <td>{sup.lowStockItems.join(", ")}</td>
                <td>{sup.lastReplaced}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending Supplier Requests */}
      <div className="section">
        <h3>New Supplier Join Requests</h3>
        {requests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          <table className="supplier-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.name}</td>
                  <td>{req.email}</td>
                  <td>{req.company}</td>
                  <td>
                    <button onClick={() => approveSupplier(req.id)}>✅ Approve</button>
                    <button onClick={() => rejectSupplier(req.id)}>❌ Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SupplierPage;
