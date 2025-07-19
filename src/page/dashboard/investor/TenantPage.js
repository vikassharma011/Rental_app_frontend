import React, { useState, useRef, useEffect } from "react";

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
  const [expandedTenantId, setExpandedTenantId] = useState(null);
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

  const toggleExpand = (id) => {
    setExpandedTenantId(prev => (prev === id ? null : id));
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
                <div><label>Name:</label><input type="text" /></div>
                <div><label>Email:</label><input type="email" /></div>
                <div><label>Phone:</label><input type="text" /></div>
                <div><label>Property:</label><input type="text" /></div>
              </div>
              <div className="form-right">
                <div><label>Lease Start:</label><input type="date" /></div>
                <div><label>Lease End:</label><input type="date" /></div>
                <div><label>Status:</label><input type="text" /></div>
                <div>
                  <label>Is Active:</label>
                  <select><option value="true">Yes</option><option value="false">No</option></select>
                </div>
              </div>
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-btn">Add</button>
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Tenant Cards */}
      <div className="tenant-card-container">
        {tenantList.map((tenant) => {
          const isExpanded = expandedTenantId === tenant.id;

          return (
            <div
              key={tenant.id}
              className={`tenant-card ${tenant.is_active ? "" : "inactive"}`}
            >
              <div
                className="card-header"
                onClick={() => toggleExpand(tenant.id)}
                style={{ cursor: "pointer" }}
              >
                <h4>{tenant.name}</h4>
                <p>{tenant.email}</p>
                <p>{tenant.phone}</p>
              </div>

              <div
                className="card-body"
                style={{
                  display: isExpanded ? "block" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <p><strong>Property:</strong> {tenant.property}</p>
                <p><strong>Lease:</strong> {tenant.leaseStart} to {tenant.leaseEnd}</p>
                <p><strong>Status:</strong> {tenant.status}</p>

                <div className="card-actions">
                  <button onClick={(e) => { e.stopPropagation(); handleViewLease(tenant); }}>📄 Lease</button>
                  <button onClick={(e) => { e.stopPropagation(); handleChat(tenant); }}>💬 Chat</button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deactivateTenant(tenant.id);
                    }}
                    disabled={!tenant.is_active}
                    className={!tenant.is_active ? "disabled" : ""}
                  >
                    ❌ Deactivate
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TenantPage;
