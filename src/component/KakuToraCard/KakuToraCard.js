import React from "react";
import "./KakuToraCard.css";
import yikeWade from "../../assets/RightImages/wadeRightSide.png";

const KakuToraCard = () => {
  return (
    <div className="KakuToraCard__Layout">
      <div className="DF">
        <img className="GSTRight__YikeWade" src={yikeWade} alt="" />
        <div>
          <p className="AmazingLame__KaratoraHighText">Highest bid by</p>
          <p className="KakutoraCard__numone">1.46 ETH</p>
        </div>
        <div>
          <p className="AmazingLame__text">
            <b>Kohaku Tora</b>
          </p>
          <p className="AmazingLame__text">
            <p className="KakutoraCard__num">$2,764.89</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default KakuToraCard;
