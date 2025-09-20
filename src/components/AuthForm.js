import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = ({ isLogin, onAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For Sign Up, check passwords match
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simulate API call success
    console.log(isLogin ? "Login successful!" : "Signup successful!", {
      email,
      password,
    });

    // Call onAuth to set isAuthenticated = true in App.js
    onAuth();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>Email address</label>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Confirm password only for Sign Up */}
      {!isLogin && (
        <>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </>
      )}

      {/* Forgot password button only for Sign In */}
      {isLogin && (
        <button
          type="button"
          className="forgot-link"
          onClick={() => alert("Forgot Password flow goes here")}
        >
          Forgot password?
        </button>
      )}

      <button type="submit" className="submit-btn">
        {isLogin ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
