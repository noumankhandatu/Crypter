import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AmazingArt from "./Pages/AmazingArt/AmazingArt";
import Home from "./Pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer/Footer";
import "./App.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" exact element={<Home />} />
        <Route path="/detail" exact element={<AmazingArt />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
