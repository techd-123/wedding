import React from "react";
import NavBar from "./NavBar";
import HeroPage from "./HeroPage";
import InfoSection from "./InfoSection";
import Slider from "./Slider";
import VendorSection from "./VendorSection";
import WeddingServices from "./WeddingServices";
import Accordion from "./Accordion";
import Youtube from "./Youtube";
import Connect from "./Connect";
import Footer from "./Footer";
import WeddingDestinationsSlider from "./WeddingDestinationsSlider";
import WeddingToolsSection from "./WeddingToolsSection";
const Home = () => {
  return (
    <>
      <NavBar />
      <HeroPage />
      <InfoSection />
      <Slider />
      <VendorSection />
      <WeddingToolsSection />
      <WeddingServices />
      <WeddingDestinationsSlider />
      <Accordion />
      <Youtube />
      <Connect />
      <Footer />
    </>
  );
};

export default Home;
