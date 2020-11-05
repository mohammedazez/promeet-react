import React from "react";
import "../css/Main.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Profesi from "../../../components/profesi/Profesi";
import SliderProduk from "../../../components/sliderproduk/SliderProduk";

function Main() {
  return (
    <div>
      <SectionOne />
      <Profesi />
      <SliderProduk />
      <SectionTwo />
      <SliderProduk />
      <SectionThree />
    </div>
  );
}

export default Main;
