import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RevealAnimation } from "./RevealAnimation";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <RevealAnimation
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        centered ? "items-center text-center mx-auto" : "",
        className
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wide uppercase text-brand-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-text-primary">
        {heading}
      </h2>
      {subheading && (
        <p className="text-xl text-text-secondary leading-relaxed">
          {subheading}
        </p>
      )}
    </RevealAnimation>
  );
}
