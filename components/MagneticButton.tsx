"use client";

import { useRef, useState, ReactNode, ElementType } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  as?: ElementType;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Tag = (href ? "a" : "button") as ElementType;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
      data-cursor-pointer
    >
      <Tag
        href={href}
        onClick={onClick}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className={clsx(
          "focus-ring relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
          variant === "primary" &&
            "bg-gradient-to-r from-violet to-cyan text-void hover:shadow-[0_0_40px_-8px_rgba(0,229,255,0.6)]",
          variant === "ghost" &&
            "glass text-ink hover:border-cyan/50 hover:text-cyan",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
