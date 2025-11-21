"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

type Props = {
  children: ReactNode;
};
const GlowCard = ({ children }: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!parentRef.current) return;

    const rect = parentRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const glowSize = 300; // matches glow div size

    // Center glow on cursor
    const targetX = mouseX - glowSize / 2;
    const targetY = mouseY - glowSize / 2;

    // Animate smoothly
    animate(x, targetX, { duration: 0.15, ease: "easeOut" });
    animate(y, targetY, { duration: 0.15, ease: "easeOut" });
  };

  const handleMouseLeave = () => {
    animate(x, 0, { duration: 0.2 });
    animate(y, 0, { duration: 0.2 });
  };

  return (
    <div
      ref={parentRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[300px] min-h-[150px] rounded-2xl overflow-hidden bg-gray-950"
    >
      {/* Glow */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="absolute cursor-move w-[180px] h-[180px] bg-blue-500 blur-3xl rounded-full pointer-events-none"
      />

      {/* Inner content */}
      <div className="absolute cursor-pointer inset-1 bg-gray-950 rounded-2xl flex flex-col justify-center items-center p-5">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
