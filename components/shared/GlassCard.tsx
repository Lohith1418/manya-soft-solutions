import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/10 backdrop-blur-[12px] border border-white/15 rounded-xl shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
