import React from "react";
import "./SlickReact.css";
import SlickCardMapped from "../SlickCard/SlickCardMapped";
import Carousel from "react-elastic-carousel";
import SlickData from "../SlickCard/SlickCardData";
const SlickReact = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        {SlickData.map((item) => (
          <div>
            <SlickCardMapped item={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default SlickReact;
