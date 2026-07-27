"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { CheckCircle2, Shield, Zap, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pillars = [
  { title: "Delivery Certainty", desc: "Fixed-scope projects delivered on time. No exceptions." },
  { title: "Enterprise-Grade Security", desc: "ISO-aligned development practices and secure code review." },
  { title: "Dedicated Account Management", desc: "A named account manager who knows your business." },
  { title: "Transparent Pricing", desc: "Clear estimates upfront. No hidden costs." },
  { title: "Full IP Ownership", desc: "Every line of code we write is yours. No licensing locks." },
  { title: "24/7 Support SLA", desc: "Tiered support plans with guaranteed response times." }
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Visual — Clean gradient with key highlights */}
          <RevealAnimation delay={0.2} className="w-full min-h-[350px] md:min-h-[500px] bg-gradient-hero rounded-2xl md:rounded-3xl relative overflow-hidden flex items-center justify-center p-8 md:p-12">
            <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8">
              <div className="flex gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Shield className="text-white" size={28} />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Zap className="text-brand-highlight" size={28} />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <HeartHandshake className="text-accent-green" size={28} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-sm">
                Your Success Is Our Only Metric
              </h3>
              <p className="text-white/70 text-sm md:text-base max-w-xs leading-relaxed">
                Enterprise reliability meets startup agility. We bring both to every engagement.
              </p>
            </div>
          </RevealAnimation>

          {/* Right Content */}
          <div className="flex flex-col gap-8 md:gap-10">
            <SectionHeader
              eyebrow="OUR PROMISE"
              heading="Engineered for Enterprise. Built for Humans."
              subheading="Working with a technology partner should feel like having a world-class team on your side — not managing a vendor at arm's length."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {pillars.map((pillar, i) => (
                <RevealAnimation key={i} delay={0.1 * i} yOffset={20}>
                  <div className="flex gap-3 md:gap-4 items-start">
                    <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={22} />
                    <div>
                      <h4 className="font-bold text-text-primary text-base md:text-lg mb-1">{pillar.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            <RevealAnimation delay={0.6}>
              <Button asChild size="lg" className="mt-2 md:mt-4 w-full sm:w-auto">
                <Link href="/about/why-us">See How We Work &rarr;</Link>
              </Button>
            </RevealAnimation>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

