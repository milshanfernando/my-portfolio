import { useGSAP } from "@gsap/react";
import Button from "../Button";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.from(".logo-hero", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
    });

    gsap.from(".blur-effect", {
      y: 50,
      x: -50,
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".logo-hero",
        {
          yPercent: -400,
          stagger: 0.06,
          ease: "none",
          duration: 3,
        },
        "<"
      );
    // .fromTo(
    //   ".fill-bg",
    //   { scale: 0, opacity: 0 },
    //   { scale: 10, opacity: 1, ease: "power1.inOut" },
    //   "<"
    // );
  }, []);
  return (
    <section className="relative flex overflow-hidden">
      <div className="z-10 flex flex-col justify-center flex-2">
        <h3 className="font-press2p text-4xl mb-5 leading-snug">
          Hey! <br /> I'm <span className=" text-[#FC530A]">Milshan</span>
        </h3>
        {/* <h1 className=" text-6xl mb-5">Web Developer</h1> */}
        <p className="max-w-md mb-10">
          Welcome to my space. I’m a developer who builds web experiences and
          finds practical solutions.
        </p>
        <div className="w-[420px]">
          <Button text="Contact Me" />
        </div>

        <div className="relative  w-[420px] rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 p-7 mt-10">
          <img
            className="w-8 mb-2 z-20"
            src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/quote-left.png"
            alt=""
          />
          <p className=" text-white italic text-sm mb-2">
            Creativity helps me see problems differently. Instead of stopping
            me, challenges push me to imagine new solutions.
          </p>
          <div className=" flex gap-5 justify-start items-center mt-4">
            <img
              className="w-10 h-10 rounded-full overflow-hidden my-auto profile-pic"
              src="../../../public/images/pro-pic.jpg"
              alt=""
            />
            <div className=" flex flex-col justify-center">
              <h4 className=" text-white text-xs font-semibold">
                Milshan Fernando
              </h4>
              <p className=" text-white text-xs">Software Engineer</p>
            </div>
          </div>
          {/* <div className="  fill-bg absolute rounded-full z-10 w-20 h-20 bg-[#FC530A]" /> */}
        </div>
      </div>
      <div className=" absolute z-0 w-[300px] h-auto left-[-8%] bottom-[-25%]">
        <img
          src="../../../public/images/flash-left.svg"
          alt="flash-left"
          className=""
        />
      </div>
      <div
        className=" blur-effect absolute bottom-[-40%] right-[-20%] w-[900px] h-[700px]
            bg-[radial-gradient(circle,black_0%,#FC530A_90%,transparent_100%)] 
            blur-[250px] z-0"
      />
      <div className=" flex-1">
        <div
          className="z-10 blur-effect absolute rounded-full right-[-15%] bottom-[-50%] w-[650px] h-[650px]
            bg-black
            blur-[100px]"
        />

        <div className="logo-hero absolute z-10 w-[300px] h-auto right-28 bottom-[40%]">
          <img
            src="../../../public/images/javascript.png"
            alt="flash-left"
            className=" rotate-[3deg]"
          />
        </div>
        <div className="logo-hero absolute z-10 w-[300px] h-auto right-92 bottom-[20%]">
          <img
            src="../../../public/images/css3.png"
            alt="flash-left"
            className=" rotate-[-20deg]"
          />
        </div>
        <div className="logo-hero absolute z-10 w-[300px] h-auto right-40 bottom-[-10%]">
          <img
            src="../../../public/images/html5.png"
            alt="flash-left"
            className=" rotate-[20deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
