import React from "react";
import "../styles/BackgroundPlayer.css";

export default function BackgroundPlayer() {
  return (
    <div className="background-video-container">
      <iframe
        className="background-video"
        src="https://www.youtube.com/embed/4yP6eU_RXwg?si=C1r08DWg8GlkkZHp"
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}
