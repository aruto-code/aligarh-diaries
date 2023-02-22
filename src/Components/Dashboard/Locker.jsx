import React from "react";
import "../../App.css";
import DashCard from "./DashCard";
import Navbar from "../Navbar.jsx";
import photo from "../../assets/Photo.jpeg";
import pan from "../../assets/PAN.jpeg";
import cv from "../../assets/CV.jpeg";
import ms from "../../assets/ms.jpeg";
import certificate from "../../assets/certificate.jpg";
import aadhar from "../../assets/aadhar.jpg";
import { useAuth0 } from "@auth0/auth0-react";

function isUser() {
  const { user } = useAuth0();
  const username = "sumir@gmail.com";
  return user.name == username;
}

function Locker() {
  const { user } = useAuth0();
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>{`${user.name}'s Locker`}</h1>
        <div className="about cards">
          {isUser ? (
            <>
              <DashCard
                head="Marksheet"
                img={ms}
                btnContent="View"
                linkto={ms}
              />
              <DashCard
                head="Certificate"
                img={certificate}
                btnContent="View"
                linkto={certificate}
              />
              <DashCard
                head="Aadhar"
                img={aadhar}
                btnContent="View"
                linkto={aadhar}
              />
            </>
          ) : (
            <>
              <DashCard
                head="Photo"
                img={photo}
                btnContent="View"
                linkto={photo}
              />
              <DashCard head="PAN" img={pan} btnContent="View" linkto={pan} />
              <DashCard head="CV" img={cv} btnContent="View" linkto={cv} />
            </>
          )}
        </div>
        <button className="btn">Upload Documents</button>
      </div>
    </>
  );
}

export default Locker;
