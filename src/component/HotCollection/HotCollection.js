import React, { useState, useRef } from "react";
import "./HotCollection.css";
import kingWade from "../../assets/HotCollectionImages/austin-wade-X6Uj51n5CE8-unsplash 1.png";

const HotCollection = (props) => {
  const { one, oneone, onetwo, onethree } = props;
  // const [state, setstate] = useState("https://picsum.photos/200/300");

  const [currentActive, setCurrentActive] = useState(one);
  return (
    <div className="HotCollection__Layout">
      <div className="HotCollection__GridSystem">
        <div>
          <img
            className="HotSection__ImageRadious"
            src={currentActive}
            alt=""
          />
          <div className="HotCollection__MiniGridSystem">
            <SubCard
              imgSrc={oneone}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
            <SubCard
              imgSrc={onetwo}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />

            <SubCard
              imgSrc={onethree}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
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

const SubCard = ({ imgSrc, currentActive, setCurrentActive }) => {
  const imgRef = useRef(null);

  const handleClick = () => {
    const temp = imgRef.current.src;
    imgRef.current.src = currentActive;
    setCurrentActive(temp);
  };
  return (
    <img
      ref={imgRef}
      onClick={handleClick}
      className="HotSection__ImageRadious"
      src={imgSrc}
      alt=""
    />
  );
};
