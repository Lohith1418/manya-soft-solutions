"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MANYA Soft Solutions delivered our cloud migration 3 weeks ahead of schedule. Their architecture team is world-class.",
    name: "Rajesh Kumar",
    title: "Chief Technology Officer",
    company: "FinCorp Solutions",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "We don't view them as a vendor, but as an extension of our own engineering department. Complete transparency and technical excellence.",
    name: "Sarah Jenkins",
    title: "VP of Engineering",
    company: "GlobalMed Health",
    image: "https://i.pravatar.cc/150?img=44"
  },
  {
    quote: "The ERP system they built modernized our entire supply chain. It's rare to find an IT partner who truly understands business operations.",
    name: "Amit Desai",
    title: "Operations Director",
    company: "Nexus Manufacturing",
    image: "https://i.pravatar.cc/150?img=33"
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <PageContainer>
        <SectionHeader
          eyebrow="CLIENT TESTIMONIALS"
          heading="What Our Partners Say"
          centered
          className="mb-16"
        />

        <RevealAnimation>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
            {testimonials.map((test, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[calc(33.333%-1rem)] bg-surface-muted border border-border-default rounded-2xl p-8 flex flex-col"
              >
                <Quote size={48} className="text-brand-primary/20 mb-6" />
                <p className="text-lg text-text-primary font-medium mb-8 leading-relaxed flex-1">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <h5 className="font-bold text-text-primary text-sm">{test.name}</h5>
                    <p className="text-text-secondary text-xs">{test.title}, {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealAnimation>
      </PageContainer>
    </section>
  );
}
