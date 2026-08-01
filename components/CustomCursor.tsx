"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 14);
      y.set(e.clientY - 14);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor-pointer]"));
    };
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          scale: isDown ? 0.7 : isPointer ? 1.8 : 1,
          opacity: isPointer ? 0.5 : 0.9,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="h-7 w-7 rounded-full border border-cyan/70 bg-violet/10"
      />
    </motion.div>
  );
}
