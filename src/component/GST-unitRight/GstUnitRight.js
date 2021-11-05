import React from "react";
import "./GstUnitRight.css";
import GSTRightCard from "././GSTRight__Card/GSTRightCard";
import HeaderBtn from "../HeaderButton/headerbtn";
const GstUnitRight = () => {
  return (
    <div className="GSTRight__Layout">
      <p className="GSTRight__textLatest">Latest upload from creators 🔥</p>
      <div className="GSTRight__LayoutTab">
        <GSTRightCard />
      </div>
      <div className="GSTRight__buttonLeft">
        <HeaderBtn
          text="Discover more      "
          Icon="fas fa-long-arrow-alt-right"
        />
      </div>
    </div>
  );
};

export default GstUnitRight;
