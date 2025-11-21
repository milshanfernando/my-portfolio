import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const workExperience = [
  {
    company: "Virtusa Pvt Ltd, Colombo",
    role: "Software Engineer",
    period: "2022 - 2024",
    description:
      "Worked on modern web applications with a focus on high performance, clean architecture, and scalable frontend–backend integration.",
    responsibilities: [
      "Developed responsive frontend interfaces with React and Angular",
      "Built REST APIs and backend services using Node.js and Express",
      "Designed and optimized MongoDB database structures",
      "Improved state/data handling using React Query",
      "Collaborated with UI/UX teams to implement Tailwind CSS styled layouts",
      "Participated in code reviews, sprint planning, and agile ceremonies",
    ],
    techStack: [
      "React",
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Query",
      "Tailwind CSS",
    ],
  },
  {
    company: "Fuel Management System",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description:
      "Developed a complete digital solution for managing fuel sales, reporting, pump meters, gas tracking, and daily summaries.",
    responsibilities: [
      "Designed and built the entire system architecture (frontend + backend)",
      "Implemented pump meter tracking with digital and manual meter inputs",
      "Built modules for fuel sales, creditor handling, and daily reporting",
      "Developed a real-time dashboard with forecasting and visual analytics",
      "Created mobile-responsive UI with Tailwind CSS & React",
      "Integrated Firebase for notifications and data sync",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Formik",
      "Yup",
      "Tailwind CSS",
    ],
  },
];

const Experiences = () => {
  useGSAP(() => {
    const blocks = gsap.utils.toArray<HTMLElement>(".exp-block");

    gsap.to(".gradient-line", {
      height: () => {
        const lastBlock = blocks[blocks.length - 1];
        return lastBlock.offsetTop + 300;
      },
      scrollTrigger: {
        trigger: ".exp-section",
        start: "top 60%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    blocks.forEach((block) => {
      const logo = block.querySelector(".logo");
      if (!logo) return;

      gsap.from(logo, {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        scrollTrigger: {
          trigger: block,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
        },
      });

      const rec = block.querySelector(".rec");
      if (!rec) return;

      gsap.from(rec, {
        opacity: 0,
        xPercent: -100,
        duration: 0.6,
        scrollTrigger: {
          trigger: block,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
        },
      });

      const exp = block.querySelector(".exp");
      if (!rec) return;

      gsap.from(exp, {
        opacity: 0,
        xPercent: 100,
        duration: 0.6,
        scrollTrigger: {
          trigger: block,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="exp-section">
      <div className=" h-full w-full relative">
        <div className="gradient-line absolute top-0 left-1/2 -translate-x-1/2" />
        {workExperience?.map((exp, index) => (
          <div key={index} className="flex gap-60 exp-block">
            <div className=" logo absolute mt-20 left-1/2 -translate-x-1/2 rounded-full w-32 h-auto bg-amber-50 p-4">
              <img src="../../../public/images/virtusa.svg" alt="" />
            </div>
            <div className="flex justify-end items-center flex-1 m-5">
              <div className=" rec bg-[#0c011e] rounded-lg p-5 w-3/5">
                <p className=" text-xs">{exp.description}</p>
              </div>
            </div>
            <div className="flex-1 m-5">
              <div className=" exp flex flex-col gap-2 mt-5">
                <h3 className="">
                  <span className=" text-amber-400">{exp.role}</span>
                </h3>
                <p className=" text-xs">{exp.period}</p>
                <ul>
                  {exp?.responsibilities?.map((res, index) => (
                    <li key={index} className="text-xs">
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
