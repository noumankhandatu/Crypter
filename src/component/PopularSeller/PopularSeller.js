import React from "react";
import SlickReact from "../SectionThree/Slick-React/SlickReact";

const PopularSeller = () => {
  return (
    <div className="SlickReact__backGLayout">
      <div className="SlickReact__textSpaceEvenely">
        <div>
          <p className="SlickReact__Popular">Popular</p>
          <p className="SlickReact__Seller">Sellers</p>
        </div>
        <div className="SlickReact__Today">
          <p className="SlickReact__TodayText">Today</p>
          <span class="material-icons SlicReact__lilopacity">
            expand_circle_down
          </span>
        </div>
      </div>
      <SlickReact />
    </div>
  );
};

export default PopularSeller;
