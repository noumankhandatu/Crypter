import React from "react";
import GreenEthBtn from "../UnitButtons/GreenEthBtn";
import "./GstUnitMid.css";
const GstUnitMid = (props) => {
  return (
    <div className="Gst__unitmidLayout">
      <div>
        <img className="Gst__ImageStylin" src={props.boxImg} alt="" />
      </div>
      <div className="GST_LearLeft">
        <p className="GST__ethText">
          <b>{props.text}</b>
        </p>
        <div className="GST__HandleMidAvaDetails">
          <div>
            <img
              className="GST__liloneAvatarimg"
              style={{ backgroundColor: `${props.bgColor}` }}
              src={props.img}
              alt=""
            />
          </div>
          <GreenEthBtn text="2.3 ETH" />
          <div>
            <p className="GST__averageText">1 of 12</p>
          </div>
        </div>
        <div>
          <button
            className="GST__btnoutcome"
            style={{ backgroundColor: `${props.bgColorBtn}` }}
          >
            <p style={{ color: `${props.colozz}` }} className="GST__btntextts">
              Place a bid
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GstUnitMid;
