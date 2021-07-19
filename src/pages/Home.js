import React from "react";

import Header from "../components/Home/Header";
import Intro from "../components/Home/Intro";
import Services from "../components/Home/Services";
import Technology from "../components/Home/Technology";
import OurDental from "../components/Home/OurDental";
import CTA from "../components/Home/CTA";
import Reviews from "../components/Home/Reviews";
import Brands from "../components/Home/Brands";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Intro />
      <Services />
      <Technology />
      <OurDental />
      <CTA />
      <Reviews />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
