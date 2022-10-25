import React from "react";
import "./GridSectionTwo.css";
import GstUnitRight from "../GST-unitRight/GstUnitRight";
import GstUnitMid from "../GST-UnitMid/GstUnitMid";
import sectionTwobgavatar from "../../assets/image/austin-wade-X6Uj51n5CE8-unsplash 1.png";
import bgSectionTwo from "../../assets/image/jakob-owens-BqSACXqDbBU-unsplash 1.png";
import GSTliloneAvatar from "../../assets/image/austin-wade-X6Uj51n5CE8-unsplash 1.png";
import unimidImage from "../../assets/image/michael-dziedzic-bOZRVWwbW9Y-unsplash.png";
import blackImgb from "../../assets/image/imgb.png";
import twinimggg from "../../assets/image/fly-d-FyN1SrqrTzQ-unsplash 1.png";
const GridSectionTwo = () => {
  return (
    <div className="GridSectionTwo__GridLayout">
      <div className="GST__TabCheker">
        <div className="GST__ImageCentering animate__animated animate__bounce">
          <img
            className="bgSectionTwo__ImageSize"
            src={
              "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
            }
            alt=""
          />
        </div>
        <div className="GridSection__avatarsOne">
          <div className="GST__BelowGrid">
            <div>
              <img
                className="GridSectionTwo__LilAvatar"
                src={sectionTwobgavatar}
                alt=""
              />
            </div>
            <div className="GST__futureLilLeft">
              <p className="GST__FutureText">The future of ETH®</p>
              <p className="GST__StockText">18 in stock</p>
            </div>
          </div>
          <div className="GST__HighestBidRight">
            <p className="GST__BidsText">Highest Bids</p>
            <div className="GST__EthTextBorder">
              <p className="GST__EthText">1.125 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="GST__rightBorder">
        <GstUnitMid
          text="Eth never die"
          boxImg={unimidImage}
          img={GSTliloneAvatar}
          rate="1 of 12"
          bgColor="#9757D7"
        />
        <GstUnitMid
          bgColorBtn="#3772FF"
          colozz="white"
          text="Aka Datusing"
          boxImg={blackImgb}
          bgColor="yellow"
          img={GSTliloneAvatar}
          rate="1 of 3"
        />
        <GstUnitMid
          text="Future Coming Soon"
          boxImg={twinimggg}
          bgColor="tomato"
          img={GSTliloneAvatar}
          rate="1 of 12"
        />
      </div>
      <div className="GST__TabCheck">
        <GstUnitRight />
      </div>
    </div>
  );
};

export default GridSectionTwo;
