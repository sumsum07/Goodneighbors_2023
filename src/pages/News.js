import React from "react";
import img from "../img/003.png";
import newsVideo from "../vidio/news.mp4"; // 동영상 파일 import
import './button.css';
import { Link } from "react-router-dom";

const News = () => {
  const handleNextClick = () => {
    // 동영상을 제어하는 로직을 추가할 수 있습니다.
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
        {/* 동영상 추가 */}
        <video
          src={newsVideo}
          controls  // 컨트롤 버튼을 표시합니다 (재생, 일시 정지, 음량 조절 등)
          style={{
            position: "absolute",
            top: "45%",  // 화면 상단에서 50% 위치로 이동
            left: "50%",  // 화면 왼쪽에서 50% 위치로 이동
            transform: "translate(-50%, -50%)",  // 중앙 정렬
            width: "74%",  // 너비 조절
            height: "27%",  // 높이 조절
            objectFit: "cover",
          }}
        />
      </div>
      {/* 이미지와 버튼을 감싸는 컨테이너 추가 */}
      <div
         style={{
          position: "absolute",
          top: "70%", // 원하는 높이로 조정
          left: "25%", // 원하는 왼쪽 위치로 조정
          transform: "translate(-50%, -50%)", // 중앙 정렬 유지
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
