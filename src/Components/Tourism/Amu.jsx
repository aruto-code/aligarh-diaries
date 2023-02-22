import React from "react";
import Navbar from "../Navbar";
import TouristCard from "./TouristCard";
import "../../App.css";
import Stra from "../../assets/Strachey.jpg";
import Kennedy from "../../assets/Kennedy.jpg";
import Jama from "../../assets/Jama.jpg";
import Musa from "../../assets/Musa.jpg";
import Syed from "../../assets/Park.jpg";
import Victoria from "../../assets/VictoriaGate.jpg";

function Amu() {
  return (
    <>
      <Navbar />
      <div className="about cards">
        <TouristCard
          head="Strachey"
          img={Stra}
          btnContent="Visit"
        />
        <TouristCard
          head="Kennedy Hall"
          img={Kennedy}
          btnContent="Visit"
        />
        <TouristCard
          head="Jama Masjid"
          img={Jama}
          btnContent="Visit"
        />
      </div>
      <div className="about cards">
        <TouristCard
          head="Musa Dakri Museum"
          img={Musa}
          btnContent="Visit"
        />
        <TouristCard
          head="Gulistan e Syed"
          img={Syed}
          btnContent="Visit"
        />
        <TouristCard
          head="Victoria Gate"
          img={Victoria}
          btnContent="Visit"
        />
      </div>
    </>
  );
}

export default Amu;
