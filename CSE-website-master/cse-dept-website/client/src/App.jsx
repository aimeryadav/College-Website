// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Footer from "./Components/Footer.jsx"; // 👈 add this

import Home from "./pages/Home.jsx";
import Admissions from "./pages/Admissions.jsx";
import Research from "./pages/Research.jsx";
import Courses from "./pages/Courses.jsx";
import Placements from "./pages/Placements.jsx";
import Faculty from "./pages/Faculty.jsx";
import Notices from "./pages/Notices.jsx";
import Login from "./pages/Login.jsx";

import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/faculty" element={<Faculty />} />

          {/* ✅ Protected pages (login required) */}
          <Route
            path="/courses"
            element={
              <ProtectedRoute allowedRoles={["student", "faculty", "admin"]}>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notices"
            element={
              <ProtectedRoute allowedRoles={["student", "faculty", "admin"]}>
                <Notices />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* 👇 footer appears on every page now */}
      <Footer />
    </div>
  );
}

export default App;
