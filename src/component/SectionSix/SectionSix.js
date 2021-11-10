import React from "react";
import HeaderBlueBtn from "../HeaderBlueButton/HeaderBlueBtn";
import SearchBox from "../SearchBox/SearchBox";
import HeaderBtn from "../HeaderButton/headerbtn";
import SectionSixCard from "./SectionSixCard/SectionSixCard";
import "./SectionSix.css";
const SectionSix = () => {
  return (
    <>
      <div className="SectionSix__Layout">
        <p className="SectionSix__TextDiscover">Discover</p>
        <div className="SectionSix__HeadTexts">
          <SearchBox text="Recently added" />
          <div className="SectionSix__HeadItemsFlexin">
            <p className="SectionSix__HeadItems">Menu</p>
            <p className="SectionSix__HeadItems">Art</p>
            <p className="SectionSix__HeadItems">Game</p>
            <p className="SectionSix__HeadItems">Photography</p>
            <p className="SectionSix__HeadItems">Music</p>
            <p className="SectionSix__HeadItems">Video</p>
          </div>
          <div>
            <HeaderBlueBtn text="Filter   ✘" />
          </div>
        </div>
        <hr className="newtwoHr" />
        <div className="SectionSix__MidLayout">
          <div>
            <p className="SectionSix__textPrize">Price</p>
            <SearchBox text="Highest price" />
          </div>
          <div>
            <p className="SectionSix__textPrize">likes</p>
            <SearchBox text="Most liked" />
          </div>
          <div>
            <p className="SectionSix__textPrize">Creator</p>
            <SearchBox text="Verified only" />
          </div>
          <div>
            <p className="SectionSix__textPrize">Price range</p>
            <input type="range" className="SectionSix__Range" name="" id="" />
            <div className="RangeTexssss">
              <p className="SectionSix__rangeText">
                <b>0.2 ETH</b>
              </p>
              <p className="SectionSix__rangeText">
                <b>10 ETH</b>
              </p>
            </div>
          </div>
          <SectionSixCard />
        </div>
        <HeaderBtn text="Load more" Icon="fas fa-spinner" />
      </div>
      <hr class="SectionSevenHr" />
    </>
  );
};

export default SectionSix;
