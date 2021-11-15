import React from "react";
import "./UnitButton.css";
const UnitButton = (props) => {
  return (
    <div
      className="UnitBtn__Margin"
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        backgroundColor: `${props.bgColor}`,
        padding: `${props.padding}`,
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default UnitButton;
