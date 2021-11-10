import React from "react";
import "./HotCollection.css";
import kingWade from "../../assets/HotCollectionImages/austin-wade-X6Uj51n5CE8-unsplash 1.png";

const HotCollection = (props) => {
  return (
    <div className="HotCollection__Layout">
      <div className="HotCollection__GridSystem">
        <div>
          <img className="HotSection__ImageRadious" src={props.one} alt="" />
          <div className="HotCollection__MiniGridSystem">
            <img
              className="HotSection__ImageRadious"
              src={props.oneone}
              alt=""
            />
            <img
              className="HotSection__ImageRadious"
              src={props.onetwo}
              alt=""
            />
            <img
              className="HotSection__ImageRadious"
              src={props.onethree}
              alt=""
            />
          </div>
          <p className="HotCollection__textAwesome">Awesome collection</p>
          <div className="HotCollection__textBtnDisplace">
            <div className="HotCollection__WadeKendrckFlex">
              <img src={kingWade} className="HotCollection__LilWade" alt="" />
              <p className="HotCollection__LilKendrick">
                <b>By Kendrick Lamar</b>
              </p>
            </div>
            <button className="HotCollection__Btn">
              <b>28 ITEMS</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotCollection;
