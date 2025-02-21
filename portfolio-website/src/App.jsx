import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Certifications from "./components/certifications/certifications.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Scrollup from "./components/scrollup/Scrollup.jsx";
import "../src/index.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
