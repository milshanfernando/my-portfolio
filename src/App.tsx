import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Experiences from "./components/sections/Experiences";
import HeroSection from "./components/sections/HeroSection";
import AboutMe from "./components/sections/AboutMe";
import Technologies from "./components/sections/Technologies";
import Projects from "./components/sections/Projects";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Technologies />
      <Projects />
      <Experiences />
    </main>
  );
};

export default App;
