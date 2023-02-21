import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar links">
      <ul>
        <img src={logo} alt="Logo" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tourism">Tourist Guide</Link>
        </li>
        <li>
          <Link to="/about">About Aligarh</Link>
        </li>
        {/* <li>
          <Link to="/feedback">Feedback</Link>
        </li> */}
        <li>
          <Link to="/news">News and Updates</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
