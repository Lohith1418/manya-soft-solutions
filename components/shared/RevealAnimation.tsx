"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function RevealAnimation({
  children,
  delay = 0,
  className = "",
  yOffset = 30,
}: RevealAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1], // ease-default
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
