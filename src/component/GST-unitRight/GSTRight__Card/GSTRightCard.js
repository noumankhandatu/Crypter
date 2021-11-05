import React from "react";
import yikeWade from "../../../assets/RightImages/wadeRightSide.png";
import six from "../../../assets/RightImages/six.png";
import two from "../../../assets/RightImages/two.png";
import three from "../../../assets/RightImages/three.png";
import four from "../../../assets/RightImages/four.png";
import oldChicken from "../../../assets/RightImages/oldchicken.png";
import GSTRightCardMapped from "./GSTRightCardMapped";
const GSTRightCard = () => {
  return (
    <>
      <GSTRightCardMapped
        bgColor="#9757D7"
        imgAva={yikeWade}
        imgNum={six}
        text="Aka Datusing"
      />
      <GSTRightCardMapped imgAva={oldChicken} imgNum={two} text="Anita Bins" />
      <GSTRightCardMapped
        imgAva={yikeWade}
        imgNum={three}
        bgColor="#EF466F"
        text="Payton Harris"
      />
      <GSTRightCardMapped
        imgAva={yikeWade}
        imgNum={four}
        bgColor="#FFD166"
        text="Lorena Ledner"
      />
    </>
  );
};

export default GSTRightCard;
