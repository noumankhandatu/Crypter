import React from "react";
import "./SectionSixCard.css";
import SectionSixMapped from "./SectionSixMapped.js";
import SectionSixData from "./SectionSixData.js";

const SectionSixCard = () => {
  return (
    <>
      {SectionSixData.map((data) => {
        return <SectionSixMapped text={data.name} img={data.img} />;
      })}
    </>
  );
};

export default SectionSixCard;
