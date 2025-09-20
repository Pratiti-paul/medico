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
      <Routes>
        {/* Landing Page - no header/navbar */}
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

        {/* All other pages - with header & navbar */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <>
                <Header onLogout={handleLogout} />
                <Navbar />
                <Routes>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/medicine" element={<MedicinePage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  {/* default redirect */}
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
