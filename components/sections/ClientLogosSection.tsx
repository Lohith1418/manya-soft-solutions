"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { motion } from "framer-motion";

export function ClientLogosSection() {
  const logos = [
    "HDFC Bank", "PhonePe", "IISc", "TechMahindra", "Apollo Hospitals", "Wipro", "Reliance", "Tata Motors", "SBI", "Flipkart"
  ];

  return (
    <section className="w-full bg-white py-[40px] border-b border-border-default overflow-hidden">
      <PageContainer>
        <div className="flex flex-col items-center gap-6">
          <span className="text-xs font-semibold text-text-secondary tracking-wide uppercase">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          
          <div className="relative w-full flex overflow-hidden group">
            {/* Gradient Mask */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div
              className="flex whitespace-nowrap items-center gap-16 pr-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="text-2xl font-bold font-display text-text-secondary/40 hover:text-brand-primary transition-colors cursor-default grayscale hover:grayscale-0">
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
