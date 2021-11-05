import React from "react";
import "./headerbtn.css";
const HeaderBtn = (props) => {
  return (
    <div className="headerbtn__fitting">
      <button className="header__buttonStyling">
        {props.text} <i class={props.Icon}></i>
      </button>
    </div>
  );
};

export default HeaderBtn;
