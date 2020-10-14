import React from "react";

import { RiRadioButtonLine, RiCloseLine } from "react-icons/ri";

import "./styles.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <RiRadioButtonLine
        alt="online image"
        className="onlineIcon"
        color={"#0f0"}
      />

      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <RiCloseLine alt="close image" color={"#fff"} />
      </a>
    </div>
  </div>
);

export default InfoBar;
