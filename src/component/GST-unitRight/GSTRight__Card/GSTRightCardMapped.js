import React from "react";
import "./GSTRightCard.css";

const GSTRightCardMapped = (props) => {
  return (
    <>
      <div className="GSTR__flex">
        <img className="GSTRight__Six" src={props.imgNum} alt="" />
        <img
          className="GSTRight__YikeWade"
          style={{ backgroundColor: `${props.bgColor}` }}
          src={props.imgAva}
          alt=""
        />
        <div className="GSTRight__lilLeft">
          <p className="GSTRight__textOne">{props.text}</p>
          <p className="GSTRight__textTwo">
            <b>2.456 </b> ETH
          </p>
        </div>
      </div>
    </>
  );
};

export default GSTRightCardMapped;
