import React, { useState, useRef, useEffect } from "react";
import PropertyCard from "../../../component/PropertyCard.js";

const PropertyPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    imageFile: null,
    address: "",
    city: "",
    state: "",
    zip_code: "",
    description: "",
  });

  const [propertyList, setPropertyList] = useState([]);
  const formRef = useRef();

  const decodeToken = (token) => {
    try {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));
      return decoded;
    } catch (err) {
      console.error("Invalid token decode:", err);
      return null;
    }
  };

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = decodeToken(token);
      const investor_id = decoded?.userId;

      const res = await fetch(
        `https://rentalappbackend-production.up.railway.app/investor/properties?investor_id=${investor_id}`
      );
      const data = await res.json();
      setPropertyList(data.properties || []);
    } catch (err) {
      console.error("Failed to fetch properties:", err);
    }
  };

  const uploadToCloudinary = async () => {
    const data = new FormData();
    data.append("file", formData.imageFile);
    data.append("upload_preset", "isa-project");
    data.append("cloud_name", "cloud-content");

    const res = await fetch("https://api.cloudinary.com/v1_1/cloud-content/image/upload", {
      method: "POST",
      body: data,
    });

    const cloudData = await res.json();
    return cloudData.url;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      setFormData((prev) => ({ ...prev, imageFile: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const decoded = decodeToken(token);
      const investor_id = decoded?.userId;
      if (!investor_id) return alert("User ID not found!");

      const imageUrl = await uploadToCloudinary();

      const property = {
        ...formData,
        investor_id,
        image: imageUrl,
      };

      delete property.imageFile;

      const res = await fetch("https://rentalappbackend-production.up.railway.app/investor/add/property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property),
      });

      await res.json();
      fetchProperties();
      setShowForm(false);
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  const handleToggleForm = () => setShowForm(!showForm);

  useEffect(() => {
    fetchProperties();
  }, []);

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
          <form className="add-property-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-columns">
              <div className="form-left">
                <div><label>Title:</label><input type="text" name="title" value={formData.title} onChange={handleChange} /></div>
                <div><label>Image Upload:</label><input type="file" name="imageFile" accept="image/*" onChange={handleChange} /></div>
                <div><label>Address:</label><input type="text" name="address" value={formData.address} onChange={handleChange} /></div>
                <div><label>City:</label><input type="text" name="city" value={formData.city} onChange={handleChange} /></div>
                <div><label>State:</label><input type="text" name="state" value={formData.state} onChange={handleChange} /></div>
              </div>

              <div className="form-right">
                <div><label>Zip Code:</label><input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} /></div>
                <div><label>Description:</label><textarea name="description" value={formData.description} onChange={handleChange} /></div>
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">Add</button>
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="property-grid">
        {propertyList.map((prop, i) => (
          <PropertyCard
            key={i}
            title={prop.title}
            image={prop.image_url}
            units={3}
            rooms={10}
            description={prop.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
