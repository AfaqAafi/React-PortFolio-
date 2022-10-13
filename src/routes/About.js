import React from "react";
import AboutContent from "../component/AboutContent";
import Footer from "../component/Footer";
import HeroImage2 from "../component/HeroImage2";
import Navbar from "../component/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="ABOUT" text="I'm friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
