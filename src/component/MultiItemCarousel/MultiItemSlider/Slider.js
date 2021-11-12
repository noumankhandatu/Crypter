import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import SectionSixData from "../SectionSixCard/SectionSixData";
import "./styles.css";
import SectionSixMapped from "../SectionSixCard/SectionSixMapped";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Slider() {
  return (
    <div className="AppMIC">
      <div className="Slider__LeftIconFlexin">
        <div>
          <p className="Slider__TextHotBid">Hot Bid</p>
        </div>
      </div>
      <div className="carousel-wrapperMIN">
        <Carousel breakPoints={breakPoints}>
          {SectionSixData.map((item) => (
            <SectionSixMapped item={item.name} img={item.img} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
