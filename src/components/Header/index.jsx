import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./style";

const index = () => {
  return (
    <Nav>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/add-product"
        >
          Add Product
        </NavLink>
      </ul>
    </Nav>
  );
};

export default index;
