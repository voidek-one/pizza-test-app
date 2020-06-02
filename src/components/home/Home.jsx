import React from "react";
import Slider from "./slider/Slider";
import Information from "./information/Information";
import TextAd from "./textAd/TextAd";
import Gallery from "./gallery/Gallery";
import ClientsAndPhone from "./clientsAndPhone/ClientsAndPhone";

const Home = () => {
  return (
    <>
      <Slider />
      <Information />
      <TextAd />
      <Gallery />
      <ClientsAndPhone />
    </>
  );
};

export default Home;
