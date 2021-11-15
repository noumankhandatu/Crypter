import React from "react";
import SectionOne from "../../component/SectionOne/SectionOne";
import GridSectionOne from "../../component/GirdSectionOne/GridSectionOne";
import GridSectionTwo from "../../component/GridSectionTwo/GridSectionTwo";
import HotCollectionMapped from "../../component/HotCollection/HotCollectionMapped";
import SectionSeven from "../../component/SectionSeven/SectionSeven";
import PopularSeller from "../../component/PopularSeller/PopularSeller.js";
import SectionSix from "../../component/SectionSix/SectionSix";
import Slider from "../../component/MultiItemCarousel/MultiItemSlider/Slider";
import RocketFired from "../../component/RocketFired/RocketFired";
const Home = () => {
  return (
    <div>
      <SectionOne />
      <RocketFired />
      <GridSectionOne />
      <GridSectionTwo />
      <PopularSeller />
      <Slider />
      <HotCollectionMapped />
      <SectionSix />
      <SectionSeven />
    </div>
  );
};

export default Home;
