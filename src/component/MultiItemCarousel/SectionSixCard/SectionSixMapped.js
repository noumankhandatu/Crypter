import React from "react";
import DiscoveryWade from "../DiscoveryImages/austin-wade-X6Uj51n5CE8-unsplash 1.png";
import GreenEthBtn from "../../UnitButtons/GreenEthBtn";
import "./SectionSixCard.css";
const SectionSixMapped = (props) => {
  return (
    <>
      <div className="SectionSixMappedLAyout">
        <img src={props.img} className="SectionSix__CardImg" />
        <div className="SectionSeven__Displacement">
          <p className="SectionSeven__Amazin">
            <b>{props.item}</b>
          </p>
          <GreenEthBtn text="0.1 ETH" />
        </div>
        <div className="SectionSeven__Displacement">
          <div>
            <img
              src={DiscoveryWade}
              className="SectionSeven__WadeCircleOne"
              alt=""
            />
            <img
              src={DiscoveryWade}
              className="SectionSeven__WadeCircleTwo"
              alt=""
            />
            <img
              src={DiscoveryWade}
              className="SectionSeven__WadeCircleThree"
              alt=""
            />
          </div>
          <p className="SectionSeven__Stock">
            <b>3 in Stock</b>
          </p>
        </div>
        <hr className="SectionSevenHr" />
        <div className="SectionSeven__Displacement">
          <div className="SectionSeven__Flex">
            <i class="material-icons SectionSevenCandleIcon">
              candlestick_chart
            </i>
            <p className="SectionSevenhightestBidText">Highest bid</p>
            <p className="SectionSeven__EthText">
              <b>0.001 ETH</b>
            </p>
          </div>
          <div>
            <p className="SectionSeven__NewBid">New bid 🔥</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSixMapped;
