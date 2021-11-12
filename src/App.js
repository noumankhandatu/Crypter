import React from "react";
import Header from "./component/Header";
import SectionOne from "./component/SectionOne/SectionOne";
import GridSectionOne from "./component/GirdSectionOne/GridSectionOne";
import GridSectionTwo from "./component/GridSectionTwo/GridSectionTwo";
import HotCollectionMapped from "./component/HotCollection/HotCollectionMapped";
import SlickReact from "./component/SectionThree/Slick-React/SlickReact";
import SectionSeven from "./component/SectionSeven/SectionSeven";
import SectionSix from "./component/SectionSix/SectionSix";
import Slider from "./component/MultiItemCarousel/MultiItemSlider/Slider";
import RocketFired from "./component/RocketFired/RocketFired";
import Footer from "./component/Footer/Footer";
import "./App.css";

function App() {
 
  return (
    <>
      <Header />
      <SectionOne /> <RocketFired />
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
