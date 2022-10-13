import React from "react";
import Footer from "../component/Footer";
import HeroImage from "../component/HeroImage";
import Navbar from "../component/Navbar";
import Work from "../component/Work";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
