import React, { useState } from "react";
import img from "../img/008.png";
import newsVideo from "../vidio/news.mp4";
import cardImg from "../img/card.png";
import letterImg from "../img/letter.png";
import announceImg from "../img/announce.png";
import "./button.css";

const News = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [announceVisible, setAnnounceVisible] = useState(false);
  const [submitVisible, setSubmitVisible] = useState(false);

  const handleNextClick = () => {
    if (!cardVisible && !letterVisible) {
      setCardVisible(true);
    } else if (!letterVisible) {
      setCardVisible(false);
      setLetterVisible(true);
    } else if (letterVisible && !announceVisible) {
      setLetterVisible(false);
      setAnnounceVisible(true);
      setSubmitVisible(true);
    }
  };

  const handleFormButtonClick = () => {
    // Reset the state when the form button is clicked
    setCardVisible(false);
    setLetterVisible(false);
    setAnnounceVisible(false);
    setSubmitVisible(false);
  };

  return (
    <div className="page" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <img
          src={img}
          alt="Intro"
          style={{
            width: "100%",
            height: "85%",
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
            width: "89%",
            height: "25%",
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
        {announceVisible && (
          <img
            src={announceImg}
            alt="Announce"
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
        {submitVisible ? (
          <a
            href="https://docs.google.com/forms/d/1XqDiwCNOnK5vp_aqRQ2UfGKLzd4LO0uiOxeyAuTb22k/edit"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFormButtonClick}
          >
            <button className="rounded-button-02" style={{ backgroundColor: "rgba(207, 71, 50, 0.8)" }}>
              지원하러 가기
            </button>
          </a>
        ) : (
          <button className="rounded-button-02" onClick={handleNextClick}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default News;
