import React from "react";

import Home from "./sections/Home/home";
import Experience from "./sections/Experience/experience";
import Contact from "./sections/Contact/contact";
import About from "./sections/About/about";
import Header from "./navigation/header";
import Work from "./sections/Work/work";
import Footer from "./sections/Footer/footer";
import "./localization";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header t={t} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About t={t} />
      </section>
      <section id="experience">
        <Experience t={t} />
      </section>

      <section id="work">
        <Work t={t} />
      </section>

      <section id="contact">
        <Contact t={t} />
      </section>
      <Footer t={t} />
    </div>
  );
};

export default App;
