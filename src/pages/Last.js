import React from "react";
import img from "../img/image 14.png";
import meetImg from "../img/합격.png";
//import goodImg from '../img/image 4.png';

const Last = () => {
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
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-50%", // Adjust the negative margin to half of the image height
            marginLeft: "-50%", // Adjust the negative margin to half of the image width
          }}
        >
          <img
            src={meetImg}
            alt="Meet"
            style={{
              width: "70%",
              // Add any additional styling for the meetImg here
            }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Last;
