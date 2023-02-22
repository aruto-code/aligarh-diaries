import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function TouristCard(props) {
  return (
    <div className="card">
      <h2 className="ach-head">{props.head}</h2>
      <div className="ach-body">
        <img
          src={props.img}
          alt={props.head}
          style={{
            width: "15rem",
          }}
        />
      </div>
      <Link to={props.linkto}>
        <button className="btn">{props.btnContent}</button>
      </Link>
    </div>
  );
}

export default TouristCard;
