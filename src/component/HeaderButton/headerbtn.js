import React from "react";
import "./headerbtn.css";
const HeaderBtn = (props) => {
  return (
    <div className="headerbtn__fitting">
      <button className="header__buttonStyling">{props.text}</button>
    </div>
  );
};

export default HeaderBtn;
