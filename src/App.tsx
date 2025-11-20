import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import About from "./components/About";
import SimpleHero from "./components/SimpleHero";
import Experiences from "./components/sections/Experiences";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <SimpleHero />
      <About />
      <Experiences />
    </main>
  );
};

export default App;
