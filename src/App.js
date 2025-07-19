// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/authpage/login";
import Register from "./page/authpage/register";
import InvestorDashboard from "./page/dashboard/investor/InvestorDashboard";
import PropertyPage from "./page/dashboard/investor/PropertyPage"; 
// import ProfilePage from "./page/dashboard/investor/ProfilePage";
import Overview from "./page/dashboard/investor/Overview";
import PropertyDetail from "./page/dashboard/investor/PropertyDetail.js";
import SupplierPage from "./page/dashboard/investor/SupplierPage.js"; 
import ReportPage from "./page/dashboard/investor/ReportPage.js"; // Import ReportPage
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Investor Dashboard Layout */}
        <Route path="/investor" element={<InvestorDashboard />}>
          <Route index element={<Overview />} /> {/* Default dashboard view */}
          <Route path="properties" element={<PropertyPage />} />
          <Route path="property" element={<PropertyDetail />} />
          <Route path="supplier" element={<SupplierPage />} />
          <Route path="reports" element={<ReportPage />} /> 
          {/* <Route path="profile" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
