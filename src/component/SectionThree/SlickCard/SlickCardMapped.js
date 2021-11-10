import React from "react";
import SlickData from "./SlickCardData";
import SlickCard from "./SlickCard";
const SlickCardMapped = (props) => {
  console.log(props.item);
  return (
    <div className="SlickReact__Flex">
      <SlickCard
        name={props.item.name}
        eth={props.item.eth}
        img={props.item.img}
        num={props.item.num}
        icon={props.item.icon}
        bgColor={props.item.bgColor}
      />
    </div>
  );
};

export default SlickCardMapped;
