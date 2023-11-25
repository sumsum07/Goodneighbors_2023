import React from "react";
import img from "../img/007.png";
import './button.css';
import { Link } from "react-router-dom";
import stringImg from "../img/image 61.png";
import nextSound from "../sound/next.mp3";
import useSound from 'use-sound';
import memo from '../img/image 59.png';
import goodImg from '../img/image 4.png';

const Intro1 = () => {
  const [playNextSound] = useSound(nextSound);

  const handleNextClick = () => {
    playNextSound();
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
          width: "120%",
        }}
      >
        <img
          src={stringImg}
          alt="Resized String"
          style={{
            maxWidth: "95%",
            height: "auto",
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2, // Set zIndex to ensure it's in front
          }}
        />
        <img
          src={memo}
          alt="Memo"
          style={{
            maxWidth: "78%",
            height: "auto",
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.88,
          }}
        />
        
      </div>
      <div
        style={{
          position: "absolute",
          top: "96%",
          left: "53%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%", // Set width to 100% to ensure proper centering
        }}
      >
        <img
          src={goodImg}
          alt="Resized String"
          style={{ maxWidth: "25%", height: "auto" }} // Use maxWidth instead of width
        />
        </div>

      {/* Button container */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
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
