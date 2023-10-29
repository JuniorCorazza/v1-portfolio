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
    <>
      <Header t={t} />
      <Home />
      <About t={t} />
      <Experience t={t} />
      <Work t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
};

export default App;
