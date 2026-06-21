"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { num: 1, title: "Discovery & Strategy", desc: "Aligning technology goals with business objectives." },
  { num: 2, title: "Architecture & Design", desc: "Scalable system blueprints and UI/UX prototyping." },
  { num: 3, title: "Agile Development", desc: "Iterative sprints with transparent milestone tracking." },
  { num: 4, title: "QA & Testing", desc: "Automated and manual testing for absolute reliability." },
  { num: 5, title: "Deployment", desc: "Zero-downtime CI/CD pipelines to production." },
  { num: 6, title: "Support & Scale", desc: "24/7 monitoring and performance optimization." }
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <PageContainer>
        <SectionHeader
          eyebrow="OUR PROCESS"
          heading="Predictable Enterprise Delivery"
          subheading="A structured, transparent methodology ensuring projects stay on time and on budget."
          centered
          className="mb-20"
        />

        <div className="relative" ref={containerRef}>
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[24px] left-[8.33%] right-[8.33%] h-[2px] border-t-2 border-dashed border-border-strong z-0">
            <motion.div 
              className="absolute inset-0 bg-brand-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => (
              <RevealAnimation key={i} delay={0.2 * i} className="flex flex-col items-center text-center relative">
                {/* Mobile Connector Line */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[48px] bottom-[-24px] left-1/2 w-[2px] border-l-2 border-dashed border-border-strong -z-10 -translate-x-1/2" />
                )}
                
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md mx-auto shrink-0 relative z-10">
                  {step.num}
                </div>
                <h4 className="font-bold text-lg text-text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-text-secondary">{step.desc}</p>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
