import React from "react";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import Footer from "../../partial/Footer";
import Testimonials from "./testimonials/Testimonials";
import Pricing from "./pricing/Pricing";
import Cta from "./cta/Cta";
import Navigation from "../../partial/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
