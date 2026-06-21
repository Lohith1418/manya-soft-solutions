"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    industry: "Financial Services",
    title: "Zero-Latency Trading Infrastructure",
    challenge: "Legacy systems causing 200ms trade delays.",
    metric: "40% Cost Reduction",
    metricColor: "text-accent-green",
    link: "/case-studies/zero-latency-trading"
  },
  {
    industry: "Healthcare",
    title: "National Telehealth Portal",
    challenge: "Unable to scale beyond 10k concurrent users.",
    metric: "2M+ Active Users",
    metricColor: "text-brand-highlight",
    link: "/case-studies/national-telehealth"
  },
  {
    industry: "Manufacturing",
    title: "Smart Factory ERP Integration",
    challenge: "Disjointed supply chain data across 14 plants.",
    metric: "99.9% Uptime SLA",
    metricColor: "text-accent-gold",
    link: "/case-studies/smart-factory-erp"
  }
];

export function CaseStudiesSection() {
  return (
    <section className="w-full bg-brand-secondary py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="FEATURED WORK"
          heading={<span className="text-white">Proof of Execution</span>}
          subheading={<span className="text-white/70">Real business challenges met with enterprise-grade solutions.</span>}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, i) => (
            <RevealAnimation key={i} delay={i * 0.1}>
              <div className="bg-[#142036] border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:border-t-2 hover:border-t-brand-primary transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4">{study.industry}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-white/60 mb-8 flex-1">{study.challenge}</p>
                <div className="mb-8">
                  <span className={`text-4xl font-black font-display tracking-tight ${study.metricColor}`}>
                    {study.metric}
                  </span>
                </div>
                <Link href={study.link} className="text-brand-highlight font-semibold flex items-center gap-2 group">
                  Read Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10" asChild>
            <Link href="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
