"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { CheckCircle2 } from "lucide-react";
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
    <section className="w-full bg-white py-24 overflow-hidden">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Visual Placeholder (Abstract Tech Graphic) */}
          <RevealAnimation delay={0.2} className="w-full h-full min-h-[500px] bg-gradient-hero rounded-3xl relative overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-end">
                 <div className="w-12 h-12 rounded-full bg-brand-highlight mb-4"></div>
                 <div className="h-4 w-3/4 bg-white/50 rounded"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-end translate-y-8">
                 <div className="w-12 h-12 rounded-full bg-accent-green mb-4"></div>
                 <div className="h-4 w-1/2 bg-white/50 rounded"></div>
              </div>
            </div>
          </RevealAnimation>

          {/* Right Content */}
          <div className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="OUR PROMISE"
              heading="Engineered for Enterprise. Built for Humans."
              subheading="Working with a technology partner should feel like having a world-class team on your side — not managing a vendor at arm's length."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <RevealAnimation key={i} delay={0.1 * i} yOffset={20}>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-text-primary text-lg mb-1">{pillar.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            <RevealAnimation delay={0.6}>
              <Button asChild size="lg" className="mt-4">
                <Link href="/about/why-us">See How We Work &rarr;</Link>
              </Button>
            </RevealAnimation>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
