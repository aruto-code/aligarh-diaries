import React from "react";
import "../App.css";
import Card from "./Card";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="cards">
        <Card head="Your Profile" showBtn={true} btnContent="View or Edit" />
        <Card
          head="Electricity Bills"
          showBtn={true}
          btnContent="Check Bills"
        />
        <Card head="Document Locker" showBtn={true} btnContent="Open Locker" />
      </div>
      <div className="cards">
        <Card head="Legal Advice" showBtn={true} btnContent="Consult a Lawer" />
        <Card head="Lodge a Grievance" showBtn={true} btnContent="Feedback" />
        <Card
          head="Government Schemes"
          showBtn={true}
          btnContent="Check Participation"
        />
      </div>
    </div>
  );
}

export default Dashboard;
