import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroExperience from "./models/HeroExperience";

const SimpleHero = () => {
  const words = [
    {
      text: "Concepts",
      icon: "https://img.icons8.com/glyph-neue/64/FFFFFF/medium-logo.png",
    },
    {
      text: "Design",
      icon: "https://img.icons8.com/liquid-glass/48/design.png",
    },
    {
      text: "Code",
      icon: "https://img.icons8.com/sf-black-filled/64/FFFFFF/code.png",
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top -10%",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#developer", { borderRadius: "100%", yPercent: -50 });
  });

  return (
    <section id="hero" className="bg-black h-80 md:h-dvh p-5 md:p-10">
      <div className="hero-layout ">
        {/* Hero content */}
        <div className="hero-text">
          <h1>
            Shaping
            <span className="slide">
              <span className="wrapper">
                {words.map((word, index) => (
                  <span key={index} className="flex items-center gap-3 pb-2">
                    <img src={word.icon} alt={word.text} />
                    <span className="text-amber-400">{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1>into Real Projects</h1>
          <h1>that Deliver Results</h1>
          <p className="my-5 text-md md:text-lg md:max-w-5/12">
            Hi! I'm Milshan, a passionate web developer dedicated to crafting
            engaging and efficient web experiences. Let's build something great
            together.
          </p>
          <Button
            text="See My Work"
            className="md:w-80 md:h-16  h-12 mt-5"
            id="counter"
          />
        </div>

        {/* {Hero 3D model } */}

        <div
          id="developer"
          className="hero-3d-layout  bg-[#16002a] rounded-s-3xl overflow-hidden"
        >
          <figure>
            <div className=" absolute w-full h-full">
              <HeroExperience />
            </div>
          </figure>
          <div className="hidden md:block absolute bottom-0 right-40  z-40 w-[500px] h-[500px] rounded-2xl overflow-hidden transition-all duration-300">
            <img
              className="w-full h-full object-cover"
              src="/images/IMG_2301.png"
              alt="Milshan"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
