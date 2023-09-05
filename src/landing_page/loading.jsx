import React from "react";
import "./loading.css";
import { NewtonsCradle } from "@uiball/loaders";
import Duck from "../assets/duck.gif";

const Loading = () => {
  return (
    <div className="loading">
      <div className="duck">
        <img src={Duck} alt="Duck" height="300" />
      </div>
      <div className="loader">
        <NewtonsCradle size={70} speed={1.0} color="#F89525" />
      </div>
    </div>
  );
};

export default Loading;
