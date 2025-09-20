import React from "react";
import "./header.css";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa"; // account & cart icons

const Header = () => {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-logo">Medico+</div>

      {/* Middle: Search Bar */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Search for products, medicines, etc."
        />
        <button>Search</button>
      </div>

      {/* Right: Account & Cart */}
      <div className="header-icons">
        <FaUserCircle className="icon account-icon" title="Account" />
        <FaShoppingCart className="icon cart-icon" title="Cart" />
      </div>
    </header>
  );
};

export default Header;
