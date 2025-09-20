import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import "./LandingPage.css";

const LandingPage = ({ onAuth }) => { // <--- receive onAuth prop
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="landing-container">
      <div className="auth-box">
        <h1>Healthcare + E-Commerce</h1>
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

        <AuthForm isLogin={isLogin} onAuth={onAuth} /> {/* <--- pass onAuth */}

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
