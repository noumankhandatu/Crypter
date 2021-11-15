import React from "react";
import vedioimage from "../../assets/image/vedioimage.png";
import avatarone from "../../assets/image/avatarone.png";
import user from "../../assets/image/user.png";
import HeaderBtn from "../HeaderButton/headerbtn";
import HeaderBlueBtn from "../../component/HeaderBlueButton/HeaderBlueBtn";
import "./GridSectionOne.css";

const GridSectionOne = () => {
  return (
    <div className="GridSectionOne__Layout animate__animated animate__fadeInDownBig">
      <div>
        <img src={vedioimage} className="GSO__VedioImage" alt="" />
      </div>
      <div className="GSOforMobile">
        <p className="GSO__headertext"> the creator network®</p>
        <div className="GSO__Layoutavatars">
          <div className="GSO__AvatarTextFlexed">
            <img className="GSO__avatorImageCss" src={avatarone} alt="" />
            <div>
              <p className="GSO__creatorTex">Creator</p>
              <p className="GSO__creatorTextwo">
                <b>Enrico Cole</b>
              </p>
            </div>
          </div>
          <div className="GSO__AvatarTextFlexed">
            <img className="GSO__avatorImageCss" src={user} alt="" />
            <div>
              <p className="GSO__creatorTex">Instant price</p>
              <p className="GSO__creatorTextwo">
                <b>3.5 ETH</b>
              </p>
            </div>
          </div>
        </div>
        <div className="GSO__circleBorder">
          <p className="GSO__textCurrentBid">Current Bid</p>
          <p className="GSO__textEth">1.00 ETH</p>
          <p className="GSO__dollarText">$3,618.36</p>
          <p className="GSO__AuctionText">Auction ending in</p>
          <div className="GSO__TimerGrid">
            <div>
              <p className="GSO__counterTextNum">19</p>
              <p className="GSO__counterTimeText">Hrs</p>
            </div>
            <div>
              <p className="GSO__counterTextNum">24</p>
              <p className="GSO__counterTimeText">mins</p>
            </div>
            <div>
              <p className="GSO__counterTextNum">19</p>
              <p className="GSO__counterTimeText">secs</p>
            </div>
          </div>
          <div>
            <HeaderBlueBtn text="Place a bid" width="280px" height="48px" />
            <HeaderBtn text="Place a bid" width="250px" height="48px" />
          </div>
          <div className="GSO__IconsFlexing">
            <div>
              <i class="fas fa-long-arrow-alt-left GSO__iconLeft"></i>
            </div>
            <div>
              <i class="fas fa-long-arrow-alt-right GSO__iconRight"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSectionOne;
