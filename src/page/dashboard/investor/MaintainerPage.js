import React, { useState, useEffect } from "react";

const dummyData = [
  {
    id: 1,
    date: "2025-07-16",
    description: "Leaking pipe in kitchen",
    priority: "High",
    status: "Pending",
    supplier: "AquaFix Services",
    cost: 1200,
    createdAt: "2025-07-14T10:00:00Z",
    attachment: "leak1.jpg"
  },
  {
    id: 2,
    date: "2025-07-15",
    description: "AC not working",
    priority: "Medium",
    status: "In Progress",
    supplier: "CoolZone Ltd",
    cost: 2500,
    createdAt: "2025-07-13T08:00:00Z",
    attachment: "ac_issue.jpg"
  },
];

const MaintenancePage = () => {
  const [requests, setRequests] = useState(dummyData);

  const reassignSupplier = (id) => {
    const newSupplier = prompt("Enter new supplier name:");
    if (newSupplier) {
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, supplier: newSupplier } : req
        )
      );
    }
  };

  const isEscalated = (createdAt) => {
    const hoursPassed = (new Date() - new Date(createdAt)) / 36e5;
    return hoursPassed > 48;
  };

  return (
    <div className="maintenance-container">
      <h2>Maintenance Requests</h2>
      <div className="request-list">
        {requests.map((req) => (
          <div className="request-card" key={req.id}>
            <div><strong>Date:</strong> {req.date}</div>
            <div><strong>Description:</strong> {req.description}</div>
            <div><strong>Priority:</strong> {req.priority}</div>
            <div><strong>Status:</strong> {req.status}</div>
            <div><strong>Supplier:</strong> {req.supplier}</div>
            <div><strong>Est. Cost:</strong> ₹{req.cost}</div>
            {isEscalated(req.createdAt) && (
              <div className="escalated">⚠ Escalated (over 48 hrs)</div>
            )}
            <button onClick={() => reassignSupplier(req.id)}>Reassign Supplier</button>
            <a
              href={`/attachments/${req.attachment}`}
              target="_blank"
              rel="noreferrer"
              className="attachment-link"
            >
              View Attachment
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenancePage;
