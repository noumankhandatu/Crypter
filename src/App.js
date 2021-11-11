import React, { useEffect, useState, useRef } from "react";
import Header from "./component/Header";
import SectionOne from "./component/SectionOne/SectionOne";
import GridSectionOne from "./component/GirdSectionOne/GridSectionOne";
import GridSectionTwo from "./component/GridSectionTwo/GridSectionTwo";
import HotCollectionMapped from "./component/HotCollection/HotCollectionMapped";
import SlickReact from "./component/SectionThree/Slick-React/SlickReact";
import SectionSeven from "./component/SectionSeven/SectionSeven";
import SectionSix from "./component/SectionSix/SectionSix";
import Slider from "./component/MultiItemCarousel/MultiItemSlider/Slider";
import Footer from "./component/Footer/Footer";
import "./App.css";

function App() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const iconRef = useRef(null);
  useEffect(() => {
    if (iconRef.current)
      if (offset >= 1000) iconRef.current.style.display = "block";
      else if (offset <= 1000) iconRef.current.style.display = "none";
  }, [offset]);

  return (
    <>
      <Header />

      <SectionOne />
      <a href="#top">
        <i ref={iconRef} className="material-icons rocket">
          rocket
        </i>
      </a>

      <GridSectionOne />
      <GridSectionTwo />
      <div className="SlickReact__backGLayout">
        <div className="SlickReact__textSpaceEvenely">
          <div>
            <p className="SlickReact__Popular">Popular</p>
            <p className="SlickReact__Seller">Sellers</p>
          </div>
          <div className="SlickReact__Today">
            <p className="SlickReact__TodayText">Today</p>
            <span class="material-icons SlicReact__lilopacity">
              expand_circle_down
            </span>
          </div>
        </div>
        <SlickReact />
      </div>
      <Slider />
      <HotCollectionMapped />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  );
}

export default App;
