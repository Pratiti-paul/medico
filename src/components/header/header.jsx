import React, { useState } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import "./header.css";

const Header = ({ onLogout }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleAccountModal = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <>
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
          {/* Account icon triggers modal */}
          <FaUserCircle
            className="icon account-icon"
            title="Account"
            onClick={toggleAccountModal}
          />
          <FaShoppingCart className="icon cart-icon" title="Cart" />
        </div>
      </header>

      
    </>
  );
};

export default Header;
