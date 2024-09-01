import React from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";
import { Bag, ShoppingCart } from "phosphor-react";

export default function Nav() {
  return (
    <div className="nav">
      <div className="navLogo">
        <Bag size={32} weight="bold" />
        <h1>eComerce</h1>
      </div>
      <ul className="navLinks">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/mens"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Men</li>
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Women</li>
        </NavLink>
        <NavLink
          to="/kids"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Kids</li>
        </NavLink>
      </ul>
      <div className="navActions">
        <NavLink
          to="/auth"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>

        {/* <Link>Logout</Link> */}
        <button>
          <ShoppingCart size={28} />
          <p>1</p>
        </button>
      </div>
    </div>
  );
}
