import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/list">Edit</NavLink>
      <NavLink to="/add">Add</NavLink>
    </nav>
  );
};

export default Navigation;
