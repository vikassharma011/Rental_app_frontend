import React, { useState, useRef, useEffect } from "react";
import PropertyCard from "../../../component/PropertyCard.js";
import House1 from "../../../assest/house1.jpg";
import House2 from "../../../assest/house2.jpg";
import House3 from "../../../assest/house3.jpg";
import House4 from "../../../assest/house4.jpg";
import House5 from "../../../assest/house5.jpg";
import House6 from "../../../assest/house6.jpg";

const properties = [
  {
    title: "Oceanview Retreat",
    image: House1,
    units: 4,
    rooms: 20,
    description:
      "Located in the vibrant city of Miami, Florida, Oceanview Retreat is a luxurious beachfront property.",
  },
  {
    title: "Countryside Villa",
    image: House2,
    units: 2,
    rooms: 10,
    description:
      "Nestled in the peaceful countryside, this villa is an escape from the noisy urban life.",
  },
  {
    title: "Mountain Escape",
    image: House3,
    units: 3,
    rooms: 15,
    description:
      "This luxurious mountain house offers breathtaking views of green valleys and snow-capped peaks.",
  },
  {
    title: "Modern City Home",
    image: House4,
    units: 5,
    rooms: 25,
    description:
      "Located in the center of downtown, this modern city property combines smart living with high-end luxury.",
  },
  {
    title: "Lakeview Bungalow",
    image: House5,
    units: 2,
    rooms: 12,
    description:
      "This charming bungalow offers a stunning view of the peaceful lake just steps away.",
  },
  {
    title: "Coastal Paradise",
    image: House6,
    units: 3,
    rooms: 18,
    description:
      "Experience coastal luxury in this ultra-modern beachfront home.",
  },
];

const PropertyPage = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef();

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
    <div className="property-page">
      <div className="property-header">
        <h2>PROPERTY</h2>
        <button className="leasing-btn" onClick={handleToggleForm}>
          Add property +
        </button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <form className="add-property-form" ref={formRef}>
            <div className="form-columns">
              <div className="form-left">
                <div>
                  <label>Title:</label>
                  <input type="text" placeholder="Enter property title" />
                </div>
                <div>
                  <label>Image URL:</label>
                  <input type="text" placeholder="Image link" />
                </div>
                <div>
                  <label>Address:</label>
                  <input type="text" placeholder="Street address" />
                </div>
                <div>
                  <label>City:</label>
                  <input type="text" placeholder="City" />
                </div>
                <div>
                  <label>State:</label>
                  <input type="text" placeholder="State" />
                </div>
              </div>

              <div className="form-right">
                <div>
                  <label>Zip Code:</label>
                  <input type="text" placeholder="Postal / Zip code" />
                </div>
                <div>
                  <label>Investor ID:</label>
                  <input type="text" placeholder="Investor ID" />
                </div>
                <div>
                  <label>Created At:</label>
                  <input type="text" placeholder="YYYY-MM-DD" />
                </div>
                <div>
                  <label>Updated At:</label>
                  <input type="text" placeholder="YYYY-MM-DD" />
                </div>
                <div>
                  <label>Description:</label>
                  <textarea placeholder="Property description" />
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

      <div className="property-grid">
        {properties.map((prop, i) => (
          <PropertyCard key={i} {...prop} />
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
