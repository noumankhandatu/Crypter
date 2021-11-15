import React from "react";
import "./headerbtn.css";
const HeaderBtn = (props) => {
  return (
    <div className="headerbtn__fitting">
      <button
        style={{ width: `${props.width}`, height: `${props.height}` }}
        className="header__buttonStyling"
      >
        {props.text} <i class={props.Icon}></i>
      </button>
    </div>
  );
};

export default HeaderBtn;
