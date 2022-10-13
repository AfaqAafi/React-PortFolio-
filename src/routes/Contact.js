import React from "react";
import Footer from "../component/Footer";
import Form from "../component/Form";
import HeroImage2 from "../component/HeroImage2";
import Navbar from "../component/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="CONTACT" text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
