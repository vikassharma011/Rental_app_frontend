// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/authpage/login";
import Register from "./page/authpage/register";
import "./App.css"; // your styles
import AccountTypeSelector from "./component/Account";
// import InvestorDashboard from "./page/dashboard/InvestorDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-account-type" element={<AccountTypeSelector />} />
      </Routes>
      {/* <InvestorDashboard /> */}
    </BrowserRouter>
  );
}

export default App;
