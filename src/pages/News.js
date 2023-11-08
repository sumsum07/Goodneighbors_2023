import React, { useState } from "react";
import img from "../img/003.png";
import newsVideo from "../vidio/news.mp4";
import cardImg from "../img/card.png";
import letterImg from "../img/letter.png"; 
import './button.css';
import { Link } from "react-router-dom";

const News = () => {
  const [cardVisible, setCardVisible] = useState(false); // cardVisible 상태 변수 추가
  const [letterVisible, setLetterVisible] = useState(false); // letterVisible 상태 변수 추가

  const handleNextClick = () => {
    if (!cardVisible) {
      setCardVisible(true); // cardVisible 상태를 true로 변경
    } else if (!letterVisible) {
      setCardVisible(false);
      setLetterVisible(true); // letterVisible 상태를 true로 변경
    }
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
          }}
        />
        <video
          src={newsVideo}
          controls
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "74%",
            height: "27%",
            objectFit: "cover",
          }}
        />
        {cardVisible && (
          <img
            src={cardImg}
            alt="Card"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "150%",
              height: "150%",
              objectFit: "contain",
            }}
          />
        )}
        {letterVisible && (
          <img
            src={letterImg}
            alt="Letter"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "150%",
              height: "150%",
              objectFit: "contain",
            }}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "25%",
          transform: "translate(-50%, -50%)",
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

export default News;
