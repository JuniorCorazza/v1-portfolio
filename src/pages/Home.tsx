import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import SelectedWork from "@/sections/SelectedWork";
import Stack from "@/sections/Stack";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
      <Stack />
      <About />
      <Contact
        line1="Let's build something"
        line2="worth keeping."
        blurb="Tell me what you're working on — I reply to every message within a day."
      />
    </>
  );
}
