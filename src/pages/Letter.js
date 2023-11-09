import React from "react";
import img from "../img/card.png";
import './fly.css';

const Letter = () => {
  return (
    <div className="letter" style={{ position: "relative", width: "100%", height: "100vh",overflow: "hidden" }}>
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img src={img} alt="Flying Letter" />
    </div>
    </div>
  );
}

export default Letter;
