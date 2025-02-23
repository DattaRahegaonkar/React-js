import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
