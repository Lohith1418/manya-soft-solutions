"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GradientButton } from "@/components/shared/GradientButton";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const GlobeComponent = dynamic(() => import("@/components/animations/GlobeComponent").then(m => m.GlobeComponent), { ssr: false });

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-brand-secondary overflow-hidden flex items-center">
      <FloatingParticles />
      
      <PageContainer className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center h-full py-24 md:py-28 lg:py-20">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6 text-white text-center lg:text-left">
          <RevealAnimation delay={0.1}>
            <span className="text-brand-highlight tracking-wide text-xs sm:text-sm font-semibold uppercase">
              ENTERPRISE IT CONSULTING & SOFTWARE SERVICES
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] font-black font-display leading-[1.1] tracking-tight">
              Engineering the Future of Your Business.
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-surface-muted max-w-2xl leading-relaxed mx-auto lg:mx-0">
              MANYA Soft Solutions architects enterprise-grade software, cloud infrastructure, and AI-powered transformation for organizations that hold their technology to a higher standard. We don&apos;t deliver software. We deliver competitive advantage.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4} className="flex justify-center lg:justify-start gap-4 mt-4">
            <GradientButton size="lg" asChild>
              <Link href="/case-studies">Explore Our Work</Link>
            </GradientButton>
          </RevealAnimation>
        </div>

        {/* Right Column — Globe visible on all screens */}
        <div className="lg:col-span-5 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[500px] relative flex items-center justify-center">
          <GlobeComponent />
          
          {/* Floating Labels around the globe */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top center */}
            <RevealAnimation delay={0.6} className="absolute top-[2%] left-1/2 -translate-x-1/2">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                Mobile Apps
              </span>
            </RevealAnimation>
            {/* Right upper */}
            <RevealAnimation delay={0.7} className="absolute top-[25%] right-[0%]">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                Cloud Solutions
              </span>
            </RevealAnimation>
            {/* Right lower */}
            <RevealAnimation delay={0.8} className="absolute bottom-[12%] right-[2%]">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                Enterprise Software
              </span>
            </RevealAnimation>
            {/* Left lower */}
            <RevealAnimation delay={0.9} className="absolute bottom-[18%] left-[0%]">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                IT Consulting
              </span>
            </RevealAnimation>
            {/* Left upper */}
            <RevealAnimation delay={1.0} className="absolute top-[30%] left-[0%]">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                AI Development
              </span>
            </RevealAnimation>
          </div>
        </div>

      </PageContainer>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-xs tracking-widest uppercase text-white font-medium">Scroll</span>
        <ChevronDown className="text-brand-highlight" size={24} />
      </div>
    </section>
  );
}

