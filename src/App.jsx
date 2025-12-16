import React from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Technologies from "./components/Technologies";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />

      <LandingPage />

      <Marquee />

      <section id="about-section">
        <About/>
      </section>

      <Technologies />

      <section id="work-section">
        <Features />
      </section>

      {/* <section id="features-section"> */}
        <Cards />
      {/* </section> */}

      <section id="contact-section">
        <Eyes />
      </section>

      <Footer />
    </div>
  );
}
export default App;
