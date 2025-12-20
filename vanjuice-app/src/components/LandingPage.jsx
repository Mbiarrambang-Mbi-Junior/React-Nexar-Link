import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="landing-page flex flex-col">
      <Hero /> {/* Hero has id="home" inside its own code */}
      <About id="about" />
      <Services id="services" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default LandingPage;
