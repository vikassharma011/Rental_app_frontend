// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/authpage/login";
import Register from "./page/authpage/register";
import InvestorDashboard from "./page/dashboard/investor/InvestorDashboard";
// import PropertyPage from "./page/dashboard/investor/PropertyPage";
// import ProfilePage from "./page/dashboard/investor/ProfilePage";
import Overview from "./page/dashboard/investor/Overview";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Investor Dashboard Layout */}
        <Route path="/investor" element={<InvestorDashboard />}>
          <Route path="" element={<Overview/>} />
          {/* <Route path="properties" element={<PropertyPage />} /> */}
          {/* <Route path="profile" element={<ProfilePage />} /> */}
        </Route>
          
        {/* You can add tenant, admin dashboards here similarly */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
