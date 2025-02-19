import React from "react";
import "./QButtons.css";

import add from "../assets/add-icon.png";
import past from "../assets/past-q-icon.png";

const QButtons = () => {
  return (
    <div className="action-buttons">
      {/* Blue Button */}
      <button className="blue-button">
        Create a Q
        <img
          src={add}
          alt="Add Icon"
          className="button-icon"
        />
      </button>

      {/* White Button */}
      <button className="white-button">
        Past Qs
        <img
          src={past}
          alt="Past Qs Icon"
          className="button-icon"
        />
      </button>
    </div>
  );
};

export default QButtons;
