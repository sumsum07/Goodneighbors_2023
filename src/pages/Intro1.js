import React from "react";
import img from "../img/007.png";
import './button.css';
import { Link } from "react-router-dom";
import stringImg from "../img/image 17.png";

const Intro1 = () => {
  const handleNextClick = () => {
    // Handle the next click logic if needed
  };

  return (
    <div className="page" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <img
          src={img}
          alt="Intro"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
          }}
        />
      </div>

      {/* Centering container for resized image */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "120%", // Set width to 100% to ensure proper centering
        }}
      >
        <img
          src={stringImg}
          alt="Resized Image"
          style={{ maxWidth: "100%", height: "auto" }} // Use maxWidth instead of width
        />
      </div>

      {/* Button container */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Link to="/News">
          <button className="rounded-button-02" onClick={handleNextClick}>
            Next →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro1;
