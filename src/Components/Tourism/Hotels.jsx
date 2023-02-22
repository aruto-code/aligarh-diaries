import React from "react";
import Navbar from "../Navbar";
import TouristCard from "./TouristCard";
import clarksinn from "../../assets/clarksinn.jpeg";
import lemontree from "../../assets/lemontree.jpeg";
import palmtree from "../../assets/palmtree.jpeg";
import ramada from "../../assets/ramada.jpeg";

function Hotels() {
  return (
    <>
      <Navbar />
      <div className="about cards">
        <TouristCard head="Ramada" img={ramada} btnContent="Visit" />
        <TouristCard head="Palm Tree" img={palmtree} btnContent="Visit" />
        <TouristCard head="Lemon Tree" img={lemontree} btnContent="Visit" />
      </div>
      <div className="about cards">
        <TouristCard head="Clark's Inn" img={clarksinn} btnContent="Visit" />
      </div>
    </>
  );
}

export default Hotels;
