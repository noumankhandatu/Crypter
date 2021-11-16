import React from "react";
import BigImage from "../../component/GirdSectionOne/BigImage/BigImage";
import GSTRightCardMapped from "../../component/GST-unitRight/GSTRight__Card/GSTRightCardMapped";
import oldChicken from "../../assets/RightImages/oldchicken.png";
import KakuToraCard from "../../component/KakuToraCard/KakuToraCard";
import yikeWade from "../../assets/RightImages/wadeRightSide.png";
import UnitLightBtn from "../../component/UnitButtons/UnitLightBtn";
import GreenEthBtn from "../../component/UnitButtons/GreenEthBtn";
import "./AmazingArt.css";
const AmazingArt = (props) => {
  return (
    <div className="AmazingArt__Layout">
      <div className="AmazingArt__GridSystem">
        <div>
          <BigImage />
        </div>
        <div>
          <p className="AmazingArt__Text">The amazing art</p>
          <div className="DF">
            <div>
              <GreenEthBtn text="2.3 ETH" />
            </div>
            <div style={{ marginLeft: "5px" }}>
              <UnitLightBtn />
            </div>
            <div>
              <p className="AmazingArt__TenStockText">10 in stock</p>
            </div>
          </div>
          <p className="AmazingLame__text ">
            <div className="MarginTop MarginBottom">
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit https://ui8.net
            </div>
          </p>
          <div className="AmazingArt__InfoText ">
            <p className="AmazingArt__TenStockText divCircled">Info</p>
            <p className="AmazingArt__TenStockText divCircled">Owner</p>
            <p className="AmazingArt__TenStockText divCircled">History</p>
            <p className="AmazingArt__TenStockText divCircled">Bids</p>
          </div>
          <div className="MarginTop MarginBottom">
            <GSTRightCardMapped
              bgColor="#9757D7"
              imgAva={oldChicken}
              text="Aka Datusing"
            />
          </div>
          <div className="MarginTop MarginBottom">
            <GSTRightCardMapped
              bgColor="#9757D7"
              imgAva={yikeWade}
              text="Aka Datusing"
            />
          </div>
          <KakuToraCard />
        </div>
        <div>
          <p>Third Dimension</p>
        </div>
      </div>
    </div>
  );
};

export default AmazingArt;
