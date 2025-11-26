import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { SplitText } from "gsap/all";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const currentRef = useRef<HTMLImageElement>(null);
  const nextRef = useRef<HTMLImageElement>(null);
  const currentRefTwo = useRef<HTMLImageElement>(null);
  const nextRefTwo = useRef<HTMLImageElement>(null);
  const currentRefThree = useRef<HTMLImageElement>(null);
  const nextRefThree = useRef<HTMLImageElement>(null);

  const images = [
    "https://i.pinimg.com/736x/cf/ab/7d/cfab7d7636b96cad138db28e7ab9ec8a.jpg",
    "https://i.pinimg.com/1200x/6b/50/a1/6b50a1fa8d106a36e8b82a67f7dcb769.jpg",
    "https://i.pinimg.com/1200x/5f/e9/38/5fe9382d547282615cf3bc9b952c27fb.jpg",
  ];

  const nextIndex = (index + 1) % images.length;
  const nextIndexTwo = (index + 2) % images.length;
  const nextIndexThree = (index + 3) % images.length;

  const nextImage = () => {
    if (
      !currentRef.current ||
      !nextRef.current ||
      !currentRefTwo.current ||
      !nextRefTwo.current ||
      !currentRefThree.current ||
      !nextRefThree.current
    )
      return;

    nextRef.current.src = images[nextIndex];
    nextRefTwo.current.src = images[nextIndexTwo];
    nextRefThree.current.src = images[nextIndexThree];

    gsap.fromTo(
      [currentRef.current, currentRefTwo.current, currentRefThree.current],
      { x: 0, opacity: 1 },
      { x: -200, opacity: 0, duration: 0.6, ease: "power3.inOut" }
    );

    gsap.fromTo(
      [nextRef.current, nextRefTwo.current, nextRefThree.current],
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.inOut" }
    );

    setTimeout(() => setIndex(nextIndex), 600);
  };

  useGSAP(() => {
    const titleSplit = new SplitText(".pro-title", { type: "chars words" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#projects-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .from(
        titleSplit.chars,
        {
          y: 200,
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
          stagger: 0.06,
        },
        "<"
      )
      .from(
        ".pro-left",
        {
          xPercent: -200,
          yPercent: 200,
          scale: -0.5,
          opacity: 0,
          ease: "power2.inOut",
          duration: 3,
        },
        "<"
      )
      .from(
        ".pro-right",
        {
          yPercent: 200,
          scale: 0.5,
          opacity: 0,
          ease: "power2.inOut",
          duration: 3,
          stagger: 0.6,
        },
        "<"
      );
  }, []);

  return (
    <section id="projects-section" className="h-screen overflow-hidden">
      <div className="flex flex-row gap-5 h-full">
        {/* Left side */}
        <div className="flex-1 pro-left bg-amber-50 rounded-4xl overflow-hidden relative">
          <button
            onClick={nextImage}
            className="absolute bottom-5 right-5 px-4 py-2 bg-[#FC530A] text-white rounded-lg"
          >
            Next
          </button>
          <div className="h-[250px] relative">
            <img
              ref={currentRef}
              src={images[index]}
              className="absolute w-full h-full object-cover"
            />

            <img
              ref={nextRef}
              className="absolute w-full h-full object-cover opacity-0 pointer-events-none"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col gap-5 min-h-0">
          <h1 className="pro-title text-5xl font-press2p text-end">
            <span className="text-[#FC530A]">Pro</span>jects
          </h1>

          <div className="flex flex-row gap-5 flex-1 min-h-0">
            <div className="pro-right flex-1 bg-amber-200 rounded-4xl overflow-hidden relative">
              <img
                ref={currentRefTwo}
                src={images[(index + 1) % images.length]}
                className="absolute w-full h-full object-cover"
              />

              <img
                ref={nextRefTwo}
                className="absolute w-full h-full object-cover opacity-0 pointer-events-none"
              />
            </div>
            <div className="pro-right flex-1 bg-amber-100 rounded-4xl overflow-hidden relative">
              <img
                ref={currentRefThree}
                src={images[(index + 2) % images.length]}
                className="absolute w-full h-full object-cover"
              />

              <img
                ref={nextRefThree}
                className="absolute w-full h-full object-cover opacity-0 pointer-events-none"
              />
            </div>

            {/* <div className="flex-1 bg-amber-100 rounded-4xl">hellow</div> */}
          </div>

          <div className="pro-right bg-amber-300 flex-1 rounded-4xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
