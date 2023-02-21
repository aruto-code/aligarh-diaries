import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
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
          <Link to="/comingsoon">News and Updates</Link>
        </li>
        {isAuthenticated && (
          <Link to="/dashboard">
            <button className="btn">Dashboard</button>
          </Link>
        )}
        <li>
          {isAuthenticated ? (
            <button
              className="btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button className="btn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
