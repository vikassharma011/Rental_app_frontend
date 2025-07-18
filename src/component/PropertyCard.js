import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ title, image, units, rooms, description }) => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation(); //  prevent triggering routing
    setFlipped((prev) => !prev);
  };

  const handleClick = () => {
    if (!flipped) {
      navigate(`/property/${encodeURIComponent(title)}`, {
        state: { title, image, units, rooms, description }
      });
    }
  };

  return (
    <div
      className={`property-card-flip-container ${flipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="property-card-flip">
        {/* FRONT */}
        <div className="property-card front">
          <img src={image} alt={title} />
          <div className="property-card-content">
            <div className="property-card-title">{title}</div>
            <div className="property-card-info">
              🏘️ {units} Unit &nbsp; | &nbsp; 🛏️ {rooms} Rooms
            </div>
            <div className="property-card-description">{description}</div>
          </div>
          <div className="actions">
            <button onClick={handleFlip}>🔄</button>
            <button>🗑️</button>
          </div>
        </div>

        {/* BACK */}
        <div className="property-card back">
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleFlip}>🔙 Back</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
