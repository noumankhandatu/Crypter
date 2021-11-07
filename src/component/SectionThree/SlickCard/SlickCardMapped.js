import React from "react";
import SlickData from "./SlickCardData";
import SlickCard from "./SlickCard";
const SlickCardMapped = () => {
  return (
    <div className="SlickReact__Flex">
      {SlickData.map((slickData) => {
        return (
          <SlickCard
            name={slickData.name}
            eth={slickData.eth}
            img={slickData.img}
            num={slickData.num}
            icon={slickData.icon}
            bgColor={slickData.bgColor}
          />
        );
      })}
    </div>
  );
};

export default SlickCardMapped;
