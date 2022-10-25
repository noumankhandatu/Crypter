import React from "react";
import HeaderBtn from "../HeaderButton/headerbtn";
import "./SectionOne.css";
const SectionOne = () => {
  return (
    <div className="layout__HeaderMB animate__animated animate__flip">
      <div>
        <div className="layout__CenterText ">
          CREATE,EXPLORE, & COLLECT DIGITAL ART NFTS.
        </div>
        <div className="layout__centerTexttwo">
          The new creative economy... !
        </div>
        <div className="layout__centerTexttwos">
          <HeaderBtn text="Start Your Search" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
