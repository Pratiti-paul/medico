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
        <div className="header-logo">Medico+</div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search for products, medicines, etc."
          />
          <button>Search</button>
        </div>

        <div className="header-icons">
          <FaUserCircle
            className="icon-account-icon"
            title="Account"
            onClick={toggleAccountModal}
          />
          <FaShoppingCart className="icon-cart-icon" title="Cart" />
        </div>
      </header>

      
    </>
  );
};

export default Header;
