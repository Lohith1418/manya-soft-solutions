"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Bot, Lightbulb, Workflow, Building2, MonitorSmartphone, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Code2, name: "Software Development", desc: "Custom enterprise applications built with modern stacks for scale and resilience." },
  { icon: Smartphone, name: "Mobile Apps", desc: "Native iOS and Android experiences with seamless cross-platform functionality." },
  { icon: Cloud, name: "Cloud Solutions", desc: "AWS, Azure, and GCP migrations, DevOps pipelines, and serverless architectures." },
  { icon: Bot, name: "AI Solutions", desc: "Machine learning models, LLM integration, and intelligent process automation." },
  { icon: Lightbulb, name: "IT Consulting", desc: "Strategic advisory, roadmap planning, and technology due diligence." },
  { icon: Workflow, name: "Digital Transformation", desc: "Process modernization and legacy system overhauls." },
  { icon: Building2, name: "Enterprise Software", desc: "ERP, CRM, and custom operational platforms." },
  { icon: MonitorSmartphone, name: "Web Applications", desc: "High-performance SaaS and full-stack web platforms." },
  { icon: Cpu, name: "Technology Consulting", desc: "Architecture review, scaling strategies, and technical advisory." },
  { icon: ShieldCheck, name: "Managed IT", desc: "L1/L2/L3 support, infrastructure monitoring, and security management." }
];

export function ServicesSection() {
  return (
    <section className="w-full bg-surface-subtle py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="WHAT WE BUILD"
          heading="End-to-End Technology Services"
          subheading="From initial architecture to global deployment — we cover the full technology spectrum so you don't have to manage multiple vendors."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <RevealAnimation key={i} delay={0.1 * (i % 3)}>
              <motion.div
                className="group relative bg-white rounded-2xl border border-border-default p-8 h-full flex flex-col hover:border-t-[3px] hover:border-t-brand-primary"
                whileHover={{
                  y: -8,
                  rotateX: -3,
                  rotateY: 3,
                  boxShadow: "0 24px 48px rgba(0, 87, 217, 0.18), 0 8px 16px rgba(0,0,0,0.08)"
                }}
                transition={{ duration: 0.3 }}
                style={{ transformPerspective: 800 }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#EEF3FB] flex items-center justify-center text-brand-primary mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">{service.name}</h3>
                <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>
                <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span>&rarr;</span>
                </Link>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
