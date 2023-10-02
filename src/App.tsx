import React from "react";

import Home from "./sections/Home/home";
import Experience from "./sections/Experience/experience";
import Contact from "./sections/Contact/contact";
import About from "./sections/About/about";
import Header from "./navigation/header";
import Work from "./sections/Work/work";
import Footer from "./sections/Footer/footer";
import WhatIDo from "./sections/WhatIDo/whatIDo";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <WhatIDo />
      <section id="experience">
        <Experience />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
