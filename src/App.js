import "./App.css";
import Header from "./component/Header";
import SectionOne from "./component/SectionOne/SectionOne";
import GridSectionOne from "./component/GirdSectionOne/GridSectionOne";
import GridSectionTwo from "./component/GridSectionTwo/GridSectionTwo";
import SlickReact from "./component/SectionThree/Slick-React/SlickReact";
function App() {
  return (
    <>
      <Header />
      <SectionOne />
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
    </>
  );
}

export default App;
