import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <h1 className="head">Aligarh Diaries</h1>
      <div className="intro">
        
      </div>
      <Navbar />
      {/* <div className="links">
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div> */}

      {/* <Link to="/pdf/Sumir_Resume.pdf" target="_blank">
        <button className="btn">View Resume</button>
      </Link> */}
    </div>
  );
}

export default Home;
