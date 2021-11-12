import React from "react";
import DropDownCardMapped from "./DropDownCardMapped";
import DropDownArray from "./DropDownCardData";
import "./DropDownCard.css";
const DropDownCard = () => {
  return (
    <>
      {DropDownArray.map((items) => {
        return (
          <div className="DropDownLilMargin">
            <DropDownCardMapped
              day={items.day}
              ethText={items.ethText}
              ethAmount={items.ethAmount}
              img={items.img}
            />
          </div>
        );
      })}
    </>
  );
};

export default DropDownCard;
// day: "2 days ago",
// img: imgNO,
// ethText: "Eth received",
// ethAmount: "0.004 Eth",
