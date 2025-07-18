// src/page/dashboard/PropertyDetail.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PropertyDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No property selected.</p>;

  return (
    <div className="property-detail-page" style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "10px" }}>
        ⬅️ Back
      </button>
      <h2>{state.title}</h2>
      <img
        src={state.image}
        alt={state.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: "20px" }}
      />
      <p><strong>Units:</strong> {state.units}</p>
      <p><strong>Rooms:</strong> {state.rooms}</p>
      <p><strong>Description:</strong> {state.description}</p>
    </div>
  );
};

export default PropertyDetail;
