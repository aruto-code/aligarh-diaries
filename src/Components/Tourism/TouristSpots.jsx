import React from "react";
import Navbar from "../Navbar";
import "../../App.css";
import TouristCard from "./TouristCard";
import khereshwar from "../../assets/khereshwar-temple.jpg";

function TouristSpots() {
  return (
    <>
      <Navbar />
      <div className="about">
        <TouristCard
          head="Khereshwar Temple"
          img={khereshwar}
          btnContent="Visit"
        />
      </div>
    </>
  );
}

export default TouristSpots;
