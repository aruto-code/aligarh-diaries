import React from "react";
import "../App.css";
import Card from "./Card";
import Navbar from "./Navbar";

function Tourism() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="cards">
        <Card head="Tourist Spots" showBtn={true} btnContent="View Places" />
        <Card
          head="Aligarh Muslim University"
          showBtn={true}
          btnContent="Visit"
        />
        <Card head="Hotels & Restaurants" showBtn={true} btnContent="View" />
      </div>
      <div className="cards">
        <Card head="Banks and ATMs" showBtn={true} btnContent="Find" />
        <Card head="Market Areas" showBtn={true} btnContent="Visit" />
        <Card head="Business Areas" showBtn={true} btnContent="Visit" />
      </div>
    </div>
  );
}

export default Tourism;
