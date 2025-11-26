import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutMe = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about-me",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
        },
      })
      .from(
        ".line-left",
        {
          xPercent: -50,
          opacity: 0,
          stagger: 0.2,
          ease: "power1.out",
        },
        "<"
      )
      .from(
        ".line-right",
        {
          xPercent: 50,
          opacity: 0,
          stagger: 0.2,
          ease: "power1.out",
        },
        "<"
      );
  }, []);
  return (
    <section
      id="about-me"
      className="flex flex-col justify-center items-center"
    >
      <div className=" z-20">
        {/* <h2 className=" text-2xl font-press2p mb-5 text-[#FC530A]">About Me</h2> */}
        <div className="text-4xl font-press2p w-full flex flex-col items-center leading-snug">
          <h1 className="line-left">
            I am a <span className="text-[#FC530A]">web developer</span>
          </h1>
          <h1 className="line-right">who loves building</h1>
          <h1 className="line-left">modern, creative </h1>
          <h1 className="line-right">digital experiences</h1>
          <h1 className="line-left">and passionate about</h1>
          <h1 className="line-right">
            the <span className="text-[#FC530A]">MERN stack</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
