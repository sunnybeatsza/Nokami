import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Slider.scss";
import { useState } from "react";

const data = [
  "https://plus.unsplash.com/premium_photo-1673203734691-cdebcf12f003?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1671229455213-7d00b1c9dbb7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1665408511276-24c85c39d671?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentImageIndex(currentImageIndex === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentImageIndex * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="slider-text">
        <h1>NOKAMI NATURALS</h1>
        <p>Essential hair care</p>
      </div>
      <div className="icons">
        <div className="icon" onClick={previousSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};
