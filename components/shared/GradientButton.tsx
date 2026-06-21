"use client";

import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  children: ReactNode;
}

export function GradientButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <div className={cn("relative inline-block overflow-hidden rounded-full", className)}>
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full"
        whileHover={{
          translateX: ["-100%", "200%"],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
        }}
      />
      <Button {...props} className="relative w-full shadow-cta hover:bg-[#0040A8]">
        {children}
      </Button>
    </div>
  );
}
