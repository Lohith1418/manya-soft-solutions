"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoIcon({ className = "w-9 h-9", colorClass }: { className?: string; colorClass?: string }) {
  return (
    <img
      src="/logo-icon.png"
      alt="MSS Logo Mark"
      className={cn("object-contain", className)}
    />
  );
}

interface LogoProps {
  useDarkText?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ useDarkText = true, className, showSubtitle = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <LogoIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" />
      <div className={cn(
        "flex flex-col font-display transition-colors duration-200",
        useDarkText ? "text-text-primary" : "text-white"
      )}>
        <span className="font-black tracking-[0.18em] text-xl leading-tight text-[#0047AB]">MSS</span>
        {showSubtitle && (
          <span className={cn(
            "text-[9px] font-bold uppercase tracking-[0.22em] leading-none mt-0.5",
            useDarkText ? "text-text-secondary" : "text-white/70"
          )}>
            MANYA Soft Solutions
          </span>
        )}
      </div>
    </Link>
  );
}

export function LogoStacked({ useDarkText = true, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex flex-col items-center gap-2 group text-center", className)}>
      <img
        src="/logo.png"
        alt="MSS Logo"
        className="w-28 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className={cn(
        "text-[10px] font-bold uppercase tracking-[0.25em] leading-none",
        useDarkText ? "text-text-secondary" : "text-white/70"
      )}>
        MANYA Soft Solutions
      </span>
    </Link>
  );
}
