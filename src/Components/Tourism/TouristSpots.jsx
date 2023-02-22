import React from "react";
import Navbar from "../Navbar";
import "../../App.css";
import TouristCard from "./TouristCard";
import khereshwar from "../../assets/khereshwar-temple.jpg";
import Exhibition from "../../assets/AligarhExhibition.jpg";
import Iskcon from "../../assets/IskconTemple.jpeg";
import Sekha from "../../assets/ShekhaJhel.jpg";
import SirSyed from "../../assets/SirSyedAcademyMuseum.jpg";
import Teerth from "../../assets/terthdhamMangalayatan.jpg";

function TouristSpots() {
  return (
    <>
      <Navbar />
      <div className="about cards">
        <TouristCard
          head="Khereshwar Temple"
          img={khereshwar}
          btnContent="Visit"
        />
        <TouristCard
          head="Aligarh Exhibition"
          img={Exhibition}
          btnContent="Visit"
        />
        <TouristCard
          head="Iskcon Temple"
          img={Iskcon}
          btnContent="Visit"
        />
      </div>
      <div className="about cards">
        <TouristCard
          head="Sekha Bird Sanctuary"
          img={Sekha}
          btnContent="Visit"
        />
        <TouristCard
          head="Sir Syed Academy Museum"
          img={SirSyed}
          btnContent="Visit"
        />
        <TouristCard
          head="Teerthdham Mangalayatan"
          img={Teerth}
          btnContent="Visit"
        />
      </div>
    </>
  );
}

export default TouristSpots;
