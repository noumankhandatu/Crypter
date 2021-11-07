import React from "react";
import logo from "../../assets/image/footerLogo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Footer__Layout">
        <div>
          <div className="Footer__LogoText">
            <img className="Footer__LogoStyle" src={logo} alt="" />
            <p className="Footer__textCrypter">Crypter</p>
          </div>
          <p className="Footer__textTheNew">The New Creative Economy.</p>
        </div>
        <div>
          <p className="Footer__textStack">
            <b>Stacks</b>
          </p>
          <p className="Footer__discover">Discover</p>
          <p className="Footer__discover">Connect wallet</p>
          <p className="Footer__discover">Create item</p>
        </div>
        <div>
          <p className="Footer__textStack">
            <b>Info</b>
          </p>
          <p className="Footer__discover">Download</p>
          <p className="Footer__discover">Demo</p>
          <p className="Footer__discover">Support</p>
        </div>
        <div>
          <p className="Footer__Join">
            <b>Join Newsletter</b>
          </p>
          <p className="Footer__SubScribe">
            Subscribe our newsletter to get more free design course and resource
          </p>
          <div className="Footer__input">
            <input
              type="text"
              className="Footer__inputinside"
              placeholder="Enter your Email"
              name=""
              id=""
            />
            <i class="material-icons footer__InputIcon">arrow_circle_right</i>
          </div>
        </div>
      </div>
      <hr className="newHr" />
      <div className="Footer__EndsHere">
        <div>
          <p className="Footer__textCopy">
            Copyright © 2021 UI8 LLC. All rights reserved
          </p>
        </div>
        <div className="Footer__EndingFlex">
          <p className="Footer__we">
            <b>We use cookies for better service.</b>
          </p>
          <p className="Footer__Accpet">Accept</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
