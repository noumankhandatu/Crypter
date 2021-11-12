import React from "react";
import HeaderBlueBtn from "../HeaderBlueButton/HeaderBlueBtn";
import "./Dropdown.css";
import DropDownCard from "./DropDownCard/DropDownCard";
const Dropdown = () => {
  return (
    <div className="DropDown__Layout">
      <div className="DFSA">
        <div>
          <p className="DropDown__Notification">Notification</p>
        </div>
        <div>
          <HeaderBlueBtn width="80px" height="30px" text="Sell Item" />
        </div>
      </div>
      <div>
        <DropDownCard />
      </div>
    </div>
  );
};

export default Dropdown;
