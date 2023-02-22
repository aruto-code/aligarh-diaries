import React from "react";
import "../App.css";
import Card from "./Card";
import Navbar from "./Navbar";

function Tourism() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="cards">
        <Card
          head="Tourist Spots"
          showBtn={true}
          btnContent="View Places"
          linkto="/tourism/spots"
        />
        <Card
          head="Aligarh Muslim University"
          showBtn={true}
          btnContent="Visit"
          linkto="/tourism/amu"
        />
        <Card
          head="Hotels & Restaurants"
          showBtn={true}
          btnContent="View"
          linkto="/tourism/hotels"
        />
      </div>
      <div className="cards">
        <Card
          head="Banks and ATMs"
          showBtn={true}
          btnContent="Find"
          linkto="/tourism/banks"
        />
        <Card
          head="Market Areas"
          showBtn={true}
          btnContent="Visit"
          linkto="/tourism/market"
        />
        <Card
          head="Business Areas"
          showBtn={true}
          btnContent="Visit"
          linkto="/tourism/business"
        />
      </div>
    </div>
  );
}

export default Tourism;
