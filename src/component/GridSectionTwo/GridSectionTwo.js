import React from "react";
import "./GridSectionTwo.css";
import sectionTwobgavatar from "../../assets/image/austin-wade-X6Uj51n5CE8-unsplash 1.png";
import bgSectionTwo from "../../assets/image/jakob-owens-BqSACXqDbBU-unsplash 1.png";
const GridSectionTwo = () => {
  return (
    <div className="GridSectionTwo__GridLayout">
      <div>
        <div className="GST__ImageCentering">
          <img className="bgSectionTwo__ImageSize" src={bgSectionTwo} alt="" />
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
      <h1>Nouman</h1>
      <h1>Nouman</h1>
    </div>
  );
};

export default GridSectionTwo;
