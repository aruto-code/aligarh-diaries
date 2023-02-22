import React from "react";
import "../App.css";
import Card from "./Card";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="cards">
        <Card
          head="Your Profile"
          showBtn={true}
          btnContent="View or Edit"
          linkto="/comingsoon"
        />
        <Card
          head="Electricity Bills"
          showBtn={true}
          btnContent="Check Bills"
          linkto="/dashboard/bills"
        />
        <Card
          head="Document Locker"
          showBtn={true}
          btnContent="Open Locker"
          linkto="/dashboard/locker"
        />
      </div>
      <div className="cards">
        <Card
          head="Legal Advice"
          showBtn={true}
          btnContent="Consult a Lawer"
          linkto="/comingsoon"
        />
        <Card
          head="Lodge a Grievance"
          showBtn={true}
          btnContent="Feedback"
          linkto="/comingsoon"
        />
        <Card
          head="Government Schemes"
          showBtn={true}
          btnContent="Check Participation"
          linkto="/comingsoon"
        />
      </div>
    </div>
  );
}

export default Dashboard;
