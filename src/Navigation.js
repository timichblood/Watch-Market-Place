import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminAddPAge from "./pages/AdminAddPAge";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import AdminEditPage from "./pages/AdminEditPage";
import ClientProvider from "./contexts/ClientProvider";

function Navigation() {
  return (
    <ClientProvider>
      <BrowserRouter>
        <AdminProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/add" element={<AdminAddPAge />} />
            <Route path="/admin/edit/:id" element={<AdminEditPage />} />
          </Routes>
        </AdminProvider>
      </BrowserRouter>
    </ClientProvider>
  );
}

export default Navigation;
