import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="card">
      <h2 className="ach-head">{props.head}</h2>
      <div className="ach-body">{props.body}</div>
      {props.showBtn ? (
        <button className="btn">View Credential</button>
      ) : (
        <button className="btn">No Credential Associated</button>
      )}
    </div>
  );
}

export default Card;
