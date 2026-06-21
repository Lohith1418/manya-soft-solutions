"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GradientButton } from "@/components/shared/GradientButton";
import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { GlassCard } from "@/components/shared/GlassCard";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const GlobeComponent = dynamic(() => import("@/components/animations/GlobeComponent").then(m => m.GlobeComponent), { ssr: false });

export function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] min-h-[800px] bg-brand-secondary overflow-hidden flex items-center">
      <FloatingParticles />
      
      <PageContainer className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pt-20">
        
        {/* Left Column 55% -> col-span-7 roughly */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-white pt-10 lg:pt-0">
          <RevealAnimation delay={0.1}>
            <span className="text-brand-highlight tracking-wide text-sm font-semibold uppercase">
              ENTERPRISE IT CONSULTING & SOFTWARE SERVICES
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h1 className="text-[56px] md:text-[72px] font-black font-display leading-[1.1] tracking-tight">
              Engineering the Future of Your Business.
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="text-xl text-surface-muted max-w-2xl leading-relaxed">
              MANYA Soft Solutions architects enterprise-grade software, cloud infrastructure, and AI-powered transformation for organizations that hold their technology to a higher standard. We don&apos;t deliver software. We deliver competitive advantage.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4} className="flex flex-col sm:flex-row gap-4 mt-4">
            <GradientButton size="lg">Start Your Project &rarr;</GradientButton>
            <Button size="lg" variant="ghost">Explore Our Work</Button>
          </RevealAnimation>
        </div>

        {/* Right Column 45% -> col-span-5 */}
        <div className="lg:col-span-5 h-[400px] lg:h-full relative hidden lg:flex items-center justify-center">
          <GlobeComponent />
          
          {/* Micro-detail Floating Chips */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <RevealAnimation delay={0.6} className="absolute top-[25%] right-[5%]">
              <GlassCard className="px-4 py-2 font-medium text-sm text-white border-brand-highlight/30">
                Cloud Solutions
              </GlassCard>
            </RevealAnimation>
            <RevealAnimation delay={0.7} className="absolute bottom-[35%] left-[0%]">
              <GlassCard className="px-4 py-2 font-medium text-sm text-white border-brand-highlight/30">
                AI Development
              </GlassCard>
            </RevealAnimation>
            <RevealAnimation delay={0.8} className="absolute bottom-[15%] right-[15%]">
              <GlassCard className="px-4 py-2 font-medium text-sm text-white border-brand-highlight/30">
                Enterprise Software
              </GlassCard>
            </RevealAnimation>
          </div>
        </div>

      </PageContainer>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-xs tracking-widest uppercase text-white font-medium">Scroll</span>
        <ChevronDown className="text-brand-highlight" size={24} />
      </div>
    </section>
  );
}
