import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { DeliveryModelSection } from "@/components/sections/DeliveryModelSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = {
  title: "MANYA Soft Solutions | Enterprise IT Consulting & Software Services",
  description: "MANYA Soft Solutions delivers enterprise-grade software, cloud infrastructure, and AI-powered transformation.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <MetricsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <ProcessSection />
      <TechStackSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <DeliveryModelSection />
      <FinalCTASection />
    </>
  );
}
