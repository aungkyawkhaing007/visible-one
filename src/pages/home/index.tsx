import React,{useState} from "react";
import FirstPage from "../../components/FirstPage";
import About from "../../components/About";
import ApiIntegratePage from "../../components/ApiIntegratePage";
import SliderPageOne from "../../components/SliderPageOne";
import SliderPageTwo from "../../components/SliderPageTwo";
import Footer from "../../components/Footer";

const index = () => {


  return (
    <div>
      <FirstPage />
      <About />
      <ApiIntegratePage/>
      <SliderPageOne/>
      <Footer/>
    </div>
  );
};

export default index;
