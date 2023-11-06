import React from "react";
import img from "../img/002.png";
import './button.css';
import {Link } from "react-router-dom";




const Intro1 = () => {
    const handleNextClick = () => {
      };
    
      return (
        <div className="page" style={{ position: "relative" }}>
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
          </div>
          {/* 이미지와 버튼을 감싸는 컨테이너 추가 */}
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