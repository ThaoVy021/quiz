import React from "react";
import videoHomePage from "../../assets/home-video.mp4";

export default function Home(props) {
  return (
    <div className="home-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>

      <div className="home-content">
        <h1>Quiz App</h1>
        <p>
          When your forms break the norm, more people fill them out. Think
          branded designs, video content, and relevant follow-up questions.
        </p>
        <button className="btn-start">Get started. It's free</button>
      </div>
    </div>
  );
}
