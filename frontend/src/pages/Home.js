import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import Works from "../components/Works";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />

      {/* Add IDs here */}
      <div id="services">
        <ServicesSection />
      </div>

      <PartnersSection />

      <div id="howitworks">
        <Works />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
