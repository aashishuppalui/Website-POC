import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper" style={{ background: "#6200ee" }}>
        <a href="#" className="brand-logo">
          Monks
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
