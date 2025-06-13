import React from "react";
import loadingGif from "../../assets/loadingGif.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <h2 className="loading-title">Agency</h2>
        <img src={loadingGif} alt="Loading..." className="loading-gif" />
      </div>
    </div>
  );
};

export default Loading;
