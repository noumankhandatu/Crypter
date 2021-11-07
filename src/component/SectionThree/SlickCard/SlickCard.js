import React from "react";
import "./SlickCard.css";
import Wade from "../../../assets/SlickImages/austin-wade-X6Uj51n5CE8-unsplash 1.png";
import Polygon from "../../../assets/SlickImages/polygon.PNG";
import leftArrow from "../../../assets/SlickImages/vector (Stroke).png";
const SlickCard = (props) => {
  return (
    <div className="SlickReact__Card">
      <div className="SlickCard__IconsFlexing">
        <div
          style={{ backgroundColor: `${props.bgColor}` }}
          className="SlickReact__BlueBtn"
        >
          <i class="material-icons">{props.icon} </i>
          <small className="SlickBlueBtn__num">{props.num}</small>
        </div>
        <div>
          <i class="far fa-plus-square SlickCardIconsx"></i>
          <img className="SlickReact__ArrowImg" src={leftArrow} alt="" />
        </div>
      </div>
      <div className="SlickReact__Card">
        <img src={props.img} alt="" className="SlickReact__WadeImage" />
        <img src={Polygon} className="polygon__style" alt="" />
        <p className="SlickReact_TextOneHere">
          <b>{props.name}</b>
        </p>
        <p className="SlickReact_TextTwoHere">
          <b>{props.eth}</b> ETH
        </p>
      </div>
    </div>
  );
};

export default SlickCard;
