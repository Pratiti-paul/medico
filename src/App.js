import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import MedicinePage from "./pages/MedicinePage";
import ConsultationPage from "./pages/ConsultationPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* Header and Navbar always visible */}
      <Header onLogout={handleLogout} />
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <LandingPage onAuth={() => setIsAuthenticated(true)} />
            )
          }
        />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" />
          }
        />

        {/* Other pages */}
        <Route
          path="/medicine"
          element={
            isAuthenticated ? <MedicinePage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/consultation"
          element={
            isAuthenticated ? <ConsultationPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/about"
          element={
            isAuthenticated ? <AboutPage /> : <Navigate to="/login" />
          }
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
