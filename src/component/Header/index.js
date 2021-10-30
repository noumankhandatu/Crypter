import React from "react";
import HeaderBlueBtn from "../HeaderBlueButton/HeaderBlueBtn";
import HeaderBtn from "../HeaderButton/headerbtn";
import "./header.css";
const Header = () => {
  return (
    <>
      <div>
        <div class="nav ">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div className="header__lastFinsih">
              <div className="image__logoSize"></div>
              <div class="nav-title">
                <small className="header__slotxtext">crypter</small>
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
                  <i class="far fa-bell header__icon"></i>
                </div>
              </div>
              <p className="Header__textDiscoverIQ">Discover</p>
              <p className="Header_colorTexIQ">How it work</p>
              <HeaderBlueBtn />
              <HeaderBtn text="Connect Wallet" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
