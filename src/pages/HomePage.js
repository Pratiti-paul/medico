import React from "react";
import Header from "../components/header/header"; // adjust path if needed

const HomePage = ({ onLogout }) => {
  return (
    <div>
      <Header /> {/* Header will show on all home page content */}
      
      <div style={{ padding: "20px" }}>
        <h1>Welcome to Medico+ Home Page</h1>
       
      </div>
    </div>
  );
};

export default HomePage;
