import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css"; // Separate CSS file for the header

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate("/")}>Athlete Bio</h1>
      <button onClick={() => navigate("/drivers")}>Drivers</button>
      <div className="search-auth">
        <input type="text" placeholder="Search..." />
        <button onClick={() => navigate("/signup")}>Sign up</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </header>
  );
};

export default Header;
