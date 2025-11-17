import { motion } from "motion/react";
import ComputerCanvas from "./Computer";

const Hero = () => {
  return (
    <section id="hero" className=" relative w-full h-screen mx-auto">
      <div className=" px-5 md:px-20 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 violet-gradient h-40" />
        </div>
        <div>
          <h1>
            Hi! I'm <span>Milshan</span>
          </h1>
          <p className="mt-2">
            I’m a developer who builds web experiences and finds practical
            solutions.
          </p>
        </div>
      </div>

      <ComputerCanvas />
      <div className=" absolute bottom-10 w-full flex justify-center items-center">
        <div className="w-[35px] h-16 border-2 border-amber-50 rounded-3xl flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-4 h-4 rounded-full bg-amber-50 mb-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
