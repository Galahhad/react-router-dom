import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Cover</h1>
      <div className="list_wrap">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;
