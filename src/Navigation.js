import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminAddPAge from "./pages/AdminAddPAge";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";

function Navigation() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add" element={<AdminAddPAge />} />
        </Routes>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default Navigation;
