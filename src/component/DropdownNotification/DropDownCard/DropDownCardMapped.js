import React from "react";

import dotImg from "../../../assets/DropdownNotificationImg/new icon.png";
import "./DropDownCard.css";
const DropDownCardMapped = (props) => {
  return (
    <div className="DFSA">
      <div className="DFSA">
        <img src={props.img} className="DropDownImg" alt="" />
        <div>
          <p className="dropDown__textEth">{props.ethText}</p>
          <p className="dropdown__textTwo">{props.ethAmount}</p>
          <p className="dropDown__textDays">{props.day}</p>
        </div>
      </div>
      <img src={dotImg} className="dropdownlilCirclepush" alt="" />
    </div>
  );
};

export default DropDownCardMapped;
