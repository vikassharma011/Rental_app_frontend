import React, { useState, useRef, useEffect } from "react";
// import "./TenantPage.css"; // optional

const tenants = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@example.com",
    phone: "9876543210",
    property: "A-101",
    leaseStart: "2024-01-01",
    leaseEnd: "2024-12-31",
    status: "Active",
    is_active: true,
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    phone: "9999988888",
    property: "B-203",
    leaseStart: "2023-01-01",
    leaseEnd: "2023-12-31",
    status: "Expired",
    is_active: false,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    phone: "9811122233",
    property: "C-105",
    leaseStart: "2024-03-01",
    leaseEnd: "2025-02-28",
    status: "Active",
    is_active: true,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "9988776655",
    property: "D-302",
    leaseStart: "2022-06-15",
    leaseEnd: "2023-06-14",
    status: "Expired",
    is_active: false,
  },
  {
    id: 5,
    name: "Karan Verma",
    email: "karan.verma@example.com",
    phone: "9871234560",
    property: "E-401",
    leaseStart: "2024-05-01",
    leaseEnd: "2025-04-30",
    status: "Active",
    is_active: true,
  },
  {
    id: 6,
    name: "Nikita Joshi",
    email: "nikita.joshi@example.com",
    phone: "9955443322",
    property: "F-110",
    leaseStart: "2023-11-01",
    leaseEnd: "2024-10-31",
    status: "Active",
    is_active: true,
  },
];

const TenantPage = () => {
  const [tenantList, setTenantList] = useState(tenants);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef();

  const deactivateTenant = (id) => {
    const updated = tenantList.map((tenant) =>
      tenant.id === id ? { ...tenant, is_active: false, status: "Inactive" } : tenant
    );
    setTenantList(updated);
  };

  const handleViewLease = (tenant) => {
    alert(`View Lease PDF for ${tenant.name}`);
  };

  const handleChat = (tenant) => {
    alert(`Chat with ${tenant.name} — coming soon!`);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
    <div className="tenant-container">
      <div className="tenant-header">
        <h2>Tenant Management</h2>
        <button className="add-tenant-btn" onClick={handleToggleForm}>
          Add tenant +
        </button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <form className="add-property-form" ref={formRef}>
            <div className="form-columns">
              <div className="form-left">
                <div>
                  <label>Name:</label>
                  <input type="text" placeholder="Tenant name" />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" placeholder="Email address" />
                </div>
                <div>
                  <label>Phone:</label>
                  <input type="text" placeholder="Phone number" />
                </div>
                <div>
                  <label>Property:</label>
                  <input type="text" placeholder="Property ID / Name" />
                </div>
              </div>

              <div className="form-right">
                <div>
                  <label>Lease Start:</label>
                  <input type="date" />
                </div>
                <div>
                  <label>Lease End:</label>
                  <input type="date" />
                </div>
                <div>
                  <label>Status:</label>
                  <input type="text" placeholder="Active / Expired" />
                </div>
                <div>
                  <label>Is Active:</label>
                  <select>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">Add</button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <table className="tenant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Property</th>
            <th>Lease Period</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenantList.map((tenant) => (
            <tr key={tenant.id}>
              <td>
                <strong>{tenant.name}</strong><br />
                <span>{tenant.email}</span>
              </td>
              <td>{tenant.phone}</td>
              <td>{tenant.property}</td>
              <td>{tenant.leaseStart} to {tenant.leaseEnd}</td>
              <td>
                <span className={`status ${tenant.status.toLowerCase()}`}>
                  {tenant.status}
                </span>
              </td>
              <td className="actions">
                <button onClick={() => handleViewLease(tenant)}>📄 Lease</button>
                <button onClick={() => handleChat(tenant)}>💬 Chat</button>
                <button
                  onClick={() => deactivateTenant(tenant.id)}
                  disabled={!tenant.is_active}
                  className={!tenant.is_active ? "disabled" : ""}
                >
                  ❌ Deactivate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantPage;
