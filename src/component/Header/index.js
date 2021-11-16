import React, { useState } from "react";
import HeaderBlueBtn from "../HeaderBlueButton/HeaderBlueBtn";
import HeaderBtn from "../HeaderButton/headerbtn";
import Dropdown from "../DropdownNotification/Dropdown";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div id="top">
      <div class="nav ">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div className="header__lastFinsih">
            <div className="image__logoSize"></div>
            <div class="nav-title">
              <Link className="text-decoration-none" to="/home">
                <small className="header__slotxtext">NFT SITE</small>
              </Link>
              <hr className="line" />
            </div>
            <p className="Header__textDiscover">Discover</p>
            <p className="Header_colorTex">How it work</p>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span> <p className="Header__textDiscover">Discover</p>
            <p className="Header_colorTex">How it work</p>
          </label>
        </div>
        <div class="nav-links ">
          <div className="unit__role">
            <div className="header__belandinbox">
              <div className="header__searchbar">
                <input type="" name="" placeholder="Search" id="searchbar" />
                <i class="fas fa-search searhcbar_con"></i>
              </div>
              <div className="header__bellrightleft">
                <div className="header__circleNotification"></div>
                <i
                  onClick={handleDropDown}
                  class="far fa-bell header__icon"
                ></i>
                {dropDown ? <Dropdown /> : null}
              </div>
            </div>
            <p className="Header__textDiscoverIQ">Discover</p>
            <p className="Header_colorTexIQ">How it work</p>
            <HeaderBlueBtn text="Upload" />
            <HeaderBtn text="Connect Wallet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
