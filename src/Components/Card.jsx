import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <h2 className="ach-head">{props.head}</h2>
      <div className="ach-body">{props.body}</div>
      {props.showBtn ? (
        <Link to={props.linkto}>
          <button className="btn">{props.btnContent}</button>
        </Link>
      ) : (
        <button className="btn">No Credential Associated</button>
      )}
    </div>
  );
}

export default Card;
