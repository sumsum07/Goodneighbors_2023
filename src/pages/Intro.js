import React, { useState } from "react";
import img from "../img/006.png";
import './button.css';
import { Link } from "react-router-dom";
import nextSound from "../sound/next.mp3";
//import backSound from "../sound/전체bgm.mp3";
import useSound from 'use-sound'; // 이 부분을 추가하세요.
import firstImg from '../img/first.png';
import goodImg from '../img/image 4.png';


const Intro = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [playNextSound] = useSound(nextSound); // 이 부분을 추가하세요.
  const handleImageLoad = () => {
    // 이미지가 로딩 완료되면 이 함수가 호출됨
    setImageLoaded(true);
  };

  const handleNextClick = () => {
    playNextSound();
    
    // 이미지 로딩 후에 버튼을 클릭하는 경우 실행할 작업
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
          onLoad={handleImageLoad}
        />
      </div>
      
      {/* Centering container for resized image */}
      <div
        style={{
          position: "absolute",
          top: "36%",
          left: "53%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%", // Set width to 100% to ensure proper centering
        }}
      >
        <img
          src={firstImg}
          alt="Resized String"
          style={{ maxWidth: "100%", height: "auto" }} // Use maxWidth instead of width
        />
      </div>
      {/* 이미지가 로딩되면 버튼을 렌더링 */}
      {imageLoaded && (
        <div
          style={{
            position: "absolute",
            bottom: 70,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Link to="/1">
            <button className="rounded-button-02" onClick={handleNextClick}>
              Next →
            </button>
          </Link>
        </div>
      )}


    </div>
  );
};

export default Intro;
