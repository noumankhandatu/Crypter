import React from "react";
import "./GreenEthBtn.css";
const GreenEthBtn = (props) => {
  return (
    <div className="GST__EthTextBorders">
      <p className="GST__EthTexts">{props.text}</p>
    </div>
  );
};

export default GreenEthBtn;
