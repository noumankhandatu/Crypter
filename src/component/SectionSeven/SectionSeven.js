import React from "react";
import "./SectionSeven.css";
import FooterImage from "../../assets/image/footerImage.PNG";
import HeaderBlueBtn from "../HeaderBlueButton/HeaderBlueBtn";
import HeaderBtn from "../HeaderButton/headerbtn";
const SectionSeven = () => {
  return (
    <div className="SectionSeven__Layout">
      <div>
        <p className="SectionSeven__textSave">SAVE YOUR TIME WITH STACKS</p>
        <p className="SectionSeven__textEarn">Earn free crypto with Crypter</p>
        <p className="SectionSeven__textCreative">
          A creative agency that lead and inspire
        </p>
        <div className="SectionSeven__buttons">
          <HeaderBlueBtn />
          <HeaderBtn text="Discover More" />
        </div>
      </div>
      <div>
        <img src={FooterImage} alt="" />
      </div>
    </div>
  );
};

export default SectionSeven;
