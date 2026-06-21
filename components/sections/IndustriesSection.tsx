"use client";

import { useState } from "react";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AbstractDashboardVisual } from "@/components/animations/AbstractDashboardVisual";

const industries = [
  { id: "healthcare", name: "Healthcare", challenges: ["HIPAA Compliance", "Legacy EMR Integration", "Telehealth Scaling"], caseStudy: "Modernizing Patient Portals for Top 10 Hospital Network" },
  { id: "finance", name: "Finance", challenges: ["Real-time Processing", "Fraud Detection", "Regulatory Compliance"], caseStudy: "Building a Zero-Latency Trading Platform" },
  { id: "retail", name: "Retail", challenges: ["Omnichannel Loyalty", "Inventory Optimization", "Headless POS"], caseStudy: "Scaling E-commerce to 50M Monthly Visits" },
  { id: "manufacturing", name: "Manufacturing", challenges: ["IIoT Integration", "Supply Chain Automation", "Predictive Maintenance"], caseStudy: "Smart Factory Automation via Custom ERP" },
  { id: "education", name: "Education", challenges: ["Scalable LMS", "Student Data Privacy", "Virtual Classrooms"], caseStudy: "Deploying a Next-Gen EdTech Platform" },
  { id: "logistics", name: "Logistics", challenges: ["Route Optimization", "Real-time Fleet Tracking", "Warehouse Automation"], caseStudy: "Global Supply Chain Visibility Platform" },
  { id: "real-estate", name: "Real Estate", challenges: ["PropTech Integration", "Virtual Property Tours", "Automated Lease Management"], caseStudy: "Modernizing Property Management Workflows" }
];

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeData = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <section className="w-full bg-brand-secondary py-24 text-white overflow-hidden">
      <PageContainer>
        <SectionHeader
          eyebrow="INDUSTRIES WE SERVE"
          heading={<span className="text-white">Domain Expertise Across Sectors</span>}
          className="mb-16"
        />

        <div className="flex flex-col gap-8">
          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 border-b border-white/20">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`whitespace-nowrap px-4 py-3 font-semibold text-lg transition-all relative ${
                  activeTab === ind.id ? "text-brand-highlight" : "text-white/60 hover:text-white"
                }`}
              >
                {ind.name}
                {activeTab === ind.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-highlight"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="min-h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Panel Content */}
                <div className="flex flex-col gap-8 pt-8">
                  <div>
                    <h3 className="text-3xl font-bold font-display mb-6">Key Challenges Solved</h3>
                    <ul className="flex flex-col gap-4">
                      {activeData.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg text-white/80">
                          <div className="w-2 h-2 rounded-full bg-brand-highlight" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-4">
                    <span className="text-xs uppercase tracking-widest text-white/50 font-bold mb-2 block">Featured Case Study</span>
                    <h4 className="text-xl font-bold mb-4">{activeData.caseStudy}</h4>
                    <Link href={`/case-studies`}>
                      <Button variant="outline" size="default" className="text-brand-highlight border-brand-highlight hover:bg-brand-highlight hover:text-white bg-transparent">Read Case Study</Button>
                    </Link>
                  </div>
                </div>

                {/* Panel Visual */}
                <AbstractDashboardVisual />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
