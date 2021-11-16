import React from "react";
import UnitButton from "../../UnitButtons/UnitButton";
import "./BigImage.css";
const BigImage = () => {
  return (
    <div>
      <div className="GSO__VedioImage">
        <div className="DF">
          <UnitButton
            width="30px"
            height="15px"
            padding="8px 8px 6px"
            text="ART"
            bgColor="#23262F"
          />
          <UnitButton
            width="86px"
            height="15px"
            text="UNLOCKABLE"
            bgColor="#9757D7"
            padding="8px 8px 6px"
          />
        </div>
      </div>
    </div>
  );
};

export default BigImage;
