import React from "react";
import "../../App.css";
import DashCard from "./DashCard";
import Navbar from "../Navbar.jsx";
import photo from "../../assets/Photo.jpeg";
import pan from "../../assets/PAN.jpeg";
import cv from "../../assets/CV.jpeg";

function Locker() {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>Ujjwal's Locker</h1>
        <div className="cards dashboard">
          <DashCard head="Photo" img={photo} btnContent="View" linkto={photo} />
          <DashCard head="PAN" img={pan} btnContent="View" linkto={pan} />
          <DashCard head="CV" img={cv} btnContent="View" linkto={cv} />
        </div>
      </div>
    </>
  );
}

export default Locker;
