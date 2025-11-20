import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".split", { type: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        end: "top center",
        scrub: true,
      },
    });

    tl.from(titleSplit.lines, {
      yPercent: 300,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2, // 👈 animate line by line
    });
  }, []);

  return (
    <section id="about" className=" h-dvh w-full bg-black">
      <div className="header flex flex-col gap-5">
        <h3 className="split">Introduction</h3>
        <h1 className="split uppercase">Overview.</h1>
        <p className="split">
          Welcome to the about section. Here you can learn more about me and my
          journey.
        </p>
      </div>
    </section>
  );
};

export default About;
