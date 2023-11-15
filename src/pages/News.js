import React, { useState } from "react";
import img from "../img/008.png";
import newsVideo from "../vidio/news.mp4";
import cardImg from "../img/card.png";
import letterImg from "../img/letter.png";
import announceImg from "../img/newNo.png";
import sayImg from "../img/image 18.png";
import sayImg2 from "../img/image 19.png";
import nextSound from "../sound/next.mp3";
//import backSound from "../sound/전체bgm.mp3";
import useSound from 'use-sound'; // 이 부분을 추가하세요.
import flySound from "../sound/편지날아옴.mp3";
import letterSound from "../sound/편지펼침.mp3";
import "./button.css";

const News = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [announceVisible, setAnnounceVisible] = useState(false);
  const [submitVisible, setSubmitVisible] = useState(false);
  const [sayVisible, setSayVisible] = useState(true); // sayImg의 상태
  const [say2Visible, setSay2Visible] = useState(false); // sayImg2의 상태
  const [playNextSound] = useSound(nextSound); // 이 부분을 추가하세요.
  const [playFlySound] = useSound(flySound); // 이 부분을 추가하세요.
  const [playLetterSound] = useSound(letterSound);

  const handleNextClick = () => {
    playNextSound();
    if (sayVisible) { // sayImg가 보일 때
      setSayVisible(false);
      setSay2Visible(true);
    } else if (say2Visible) { // sayImg2가 보일 때
      setSay2Visible(false);
      setCardVisible(true);
      playFlySound();
    } else if (!cardVisible && !letterVisible) {
      setCardVisible(true);
    } else if (!letterVisible) {
      setCardVisible(false);
      setLetterVisible(true);
      playLetterSound();
    } else if (letterVisible && !announceVisible) {
      setLetterVisible(false);
      setAnnounceVisible(true);
      setSubmitVisible(true);
    }
  };

  const handleFormButtonClick = () => {
    playNextSound();
    // Reset the state when the form button is clicked
    setCardVisible(false);
    setLetterVisible(false);
    setAnnounceVisible(false);
    setSubmitVisible(false);
    setSayVisible(true);
    setSay2Visible(false);
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
            position: "absolute",  // 이미지의 위치를 조정하기 위해 absolute로 설정
            top: "50%",            // 수직 가운데로 이동
            transform: "translate(-50%, -50%)",  // 이미지의 높이의 절반만큼 위로 이동하여 가운데 정렬
          }}
        />

        <video
          src={newsVideo}
          controls
          autoPlay
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -30%)",
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
        {sayVisible && (
          <img
            src={sayImg}
            alt="Say"
            style={{
              position: "absolute",
              top: "17%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "150%",
              objectFit: "contain",
            }}
          />
        )}
        {say2Visible && (
          <img
            src={sayImg2}
            alt="Say2"
            style={{
              position: "absolute",
              top: "18%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
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
