import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import SectionOne from "./component/SectionOne/SectionOne";
import GridSectionOne from "./component/GirdSectionOne/GridSectionOne";
import GridSectionTwo from "./component/GridSectionTwo/GridSectionTwo";
import HotCollectionMapped from "./component/HotCollection/HotCollectionMapped";
import SectionSeven from "./component/SectionSeven/SectionSeven";
import PopularSeller from "./component/PopularSeller/PopularSeller.js";
import SectionSix from "./component/SectionSix/SectionSix";
import Slider from "./component/MultiItemCarousel/MultiItemSlider/Slider";
import RocketFired from "./component/RocketFired/RocketFired";
import Footer from "./component/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SectionOne />
        <RocketFired />
        <GridSectionOne />
        <GridSectionTwo />
        <PopularSeller />
        <Slider />
        <HotCollectionMapped />
        <SectionSix />
        <SectionSeven />
        <Footer />
      </Router>
    </>
  );
}

export default App;
