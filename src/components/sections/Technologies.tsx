import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Technologies = () => {
  const logos = [
    {
      name: "ExpressJs",
      icon: "../../../public/images/Express.png",
      bg: "#CFCFCF", // gray because real brand is black
    },
    {
      name: "MongoDb",
      icon: "../../../public/images/MongoDB.png",
      bg: "#A8DFA9",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/color/96/redux.png",
      bg: "#C7ACE8",
    },
    {
      name: "Angular",
      icon: "../../../public/images/Angular.png",
      bg: "#F38AA0",
    },
    {
      name: "NodeJs",
      icon: "../../../public/images/Node.js.png",
      bg: "#7EDB9E",
    },
    {
      name: "Docker",
      icon: "../../../public/images/Docker.png",
      bg: "#96E6F7",
    },
    {
      name: "React",
      icon: "../../../public/images/React-2.png",
      bg: "#b8F9FF", // lightened
    },
    {
      name: "git",
      icon: "../../../public/images/GitHub.png",
      bg: "#CFCFCF",
    },
    {
      name: "Figma",
      icon: "../../../public/images/Figma.png",
      bg: "#F8AFA3",
    },
  ];

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".banner",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // pin: true,
        },
      })
      .to(
        ".slider",
        // { rotationY: 0, rotateX: -16 },
        { rotationY: 360, ease: "none", duration: 3 },
        "<"
      )
      .from(".title", { opacity: 0, ease: "power1.out", duration: 1 }, "<");
  }, []);

  return (
    <div className=" banner bg-black overflow-hidden">
      <div
        className="slider"
        style={{ "--items": logos.length } as React.CSSProperties}
      >
        {logos?.map((img, index) => (
          <div
            key={index}
            style={
              {
                backgroundColor: img.bg,
                "--position": index + 1,
              } as React.CSSProperties
            }
            className="item rounded-4xl overflow-hidden p-7"
          >
            <img src={img.icon} alt="" className=" object-cover" />
            <h1 className=" text-black font-semibold">{img.name}</h1>
          </div>
        ))}
      </div>
      <div
        className=" blur-effect absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px]
            bg-[radial-gradient(circle,black_0%,#FC530A_90%,transparent_100%)] 
            blur-[250px] z-0"
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10">
        <h2 className="title text-3xl font-bold mb-5 font-press2p">
          Technologies <span className="text-[#FC530A]">I</span> Use
        </h2>
        <p className="sub-title text-gray-300">
          These are the technologies I use daily to build fast, modern, and
          interactive web experiences.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
