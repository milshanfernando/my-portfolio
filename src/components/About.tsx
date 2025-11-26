import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const mern = {
  logos: [
    { name: "MongoDb", icon: "https://img.icons8.com/color/96/mongo-db.png" },
    {
      name: "ExpressJs",
      icon: "https://img.icons8.com/ios/100/express-js.png",
    },
    { name: "React", icon: "https://img.icons8.com/plasticine/100/react.png" },
    { name: "NodeJs", icon: "https://img.icons8.com/color/96/nodejs.png" },
  ],
  topic: "The Full-Stack",
  title: "Superhero: MERN",
  des: "I build modern, responsive web applications using the MERN stack. From designing smooth, interactive frontends in React to building fast, scalable backends with Node.js and Express, I deliver full-stack solutions. MongoDB ensures data is flexible and ready for real-time updates. MERN allows me to take ideas from concept to production seamlessly.",
};

const mean = {
  logos: [
    { name: "MongoDb", icon: "https://img.icons8.com/color/96/mongo-db.png" },
    {
      name: "ExpressJs",
      icon: "https://img.icons8.com/ios/100/express-js.png",
    },
    { name: "Angular", icon: "https://img.icons8.com/color/48/angularjs.png" },
    { name: "NodeJs", icon: "https://img.icons8.com/color/96/nodejs.png" },
  ],
  topic: "Angular",
  title: "Powerhouse: MEAN",
  des: "Using the MEAN stack, I create robust, enterprise-ready applications. Angular provides a structured, component-driven frontend, while Node.js and Express power the backend. MongoDB stores data efficiently, supporting complex relationships and rapid queries. With MEAN, I build apps that are both maintainable and scalable.",
};

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>(".about-slide");

    // make sure slides stack above each other
    slides?.forEach((s, i) => {
      if (s) {
        gsap.set(s, {
          position: "absolute",
          inset: 0,
          zIndex: slides.length - i,
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=" + slides.length * 100 + "%",
        pin: true,
        scrub: true,
      },
    });

    slides?.forEach((slide) => {
      const left = slide.querySelector(".left-content");
      const right = slide.querySelector(".right-content");

      // animate left from top and right from bottom simultaneously
      tl.fromTo(
        left,
        { y: -550, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" },
        "<"
      );
      tl.fromTo(
        right,
        { y: 550, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" },
        "<"
      );

      // hold a little, then fade this slide out so next becomes visible
      tl.to(slide, { autoAlpha: 0 });
    });
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full relative text-white"
    >
      {/* <div className=" w-full flex gap-5 justify-center items-center">
        {logos?.map((logo, index) => (
          <div
            key={index}
            className={`w-28  h-28 rounded-full flex justify-center items-center p-2`}
          >
            <img
              key={index}
              src={logo.icon}
              alt={logo.name}
              className="logo-item object-contain m-2"
            />
          </div>
        ))}
      </div> */}
      {/* Slide 1: Image left, text right */}
      <div className="about-slide bg-white h-screen flex items-center justify-between w-full">
        <div className=" flex-1 flex items-center justify-center gap-5 h-full">
          {mern?.logos?.map((logo, index) => (
            <div
              key={index}
              className={`mern w-28 h-28 rounded-full flex justify-center items-center p-2 ${
                logo.name.toLowerCase() !== "expressjs"
                  ? "bg-[#13012a]"
                  : " bg-amber-50"
              }`}
            >
              <img
                key={index}
                src={logo.icon}
                alt={logo.name}
                className="logo-item object-contain m-2"
              />
            </div>
          ))}
        </div>
        <div className=" flex-1 h-full flex justify-center items-center">
          <div className="text-center p-20">
            <h1>{mern?.topic}</h1>
            <h1>{mern?.title}</h1>
            <p className="mt-5 text-lg italic text-black">{mern?.des}</p>
          </div>
        </div>
      </div>

      {/* Slide 2: Text left, image right */}
      <div className="about-slide flex items-center justify-between h-full">
        <div className="left-content flex-1 h-full bg-[#13012a] flex justify-center items-center">
          <div className="text-center p-20">
            <h1>{mean?.topic}</h1>
            <h1>{mean?.title}</h1>
            <p className="mt-5 text-lg italic">{mean?.des}</p>
          </div>
        </div>
        <div className="right-content bg-amber-100 h-full flex-1 flex items-center justify-center gap-5">
          {mean?.logos?.map((logo, index) => (
            <div
              key={index}
              className={`w-28 h-28 rounded-full flex justify-center items-center p-2 ${
                logo.name.toLowerCase() !== "expressjs"
                  ? "bg-[#13012a]"
                  : " bg-amber-50"
              }`}
            >
              <img
                key={index}
                src={logo.icon}
                alt={logo.name}
                className="logo-item object-contain m-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
