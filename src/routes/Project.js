import React from "react";
import Footer from "../component/Footer";
import HeroImage2 from "../component/HeroImage2";
import Navbar from "../component/Navbar";
import PricingCards from "../component/PricingCards";
import Work from "../component/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECT" text="Some of my most recent work" />
      <Work />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Project;
