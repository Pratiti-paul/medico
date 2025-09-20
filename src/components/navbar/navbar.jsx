import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link
        to="/home"
        className={location.pathname === "/home" ? "nav-link active" : "nav-link"}
      >
        Home
      </Link>
      <Link
        to="/medicine"
        className={location.pathname === "/medicine" ? "nav-link active" : "nav-link"}
      >
        Medicine
      </Link>
      <Link
        to="/consultation"
        className={location.pathname === "/consultation" ? "nav-link active" : "nav-link"}
      >
        Consultation
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
