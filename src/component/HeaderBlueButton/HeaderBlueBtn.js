import React from "react";
import "./HeaderBlueButton.css";
const HeaderBlueBtn = (props) => {
  return (
    <div>
      <button className="Header__BlueBtn">{props.text}</button>
    </div>
  );
};

export default HeaderBlueBtn;
