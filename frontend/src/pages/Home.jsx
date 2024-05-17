import React from "react";
import Reservatoin from "../components/Reservation.jsx";
import About_us from "../components/About_us.jsx";
import Services from "../components/Services.jsx";
import Team from "../components/Team.jsx";
import HomePage from "../components/HomePage.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomePage />
      <About_us />
      <Services />
      <Team />
      <Reservatoin />
      <Footer />
    </div>
  );
};

export default Home;
