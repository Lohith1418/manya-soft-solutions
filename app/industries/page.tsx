import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { HeartPulse, Landmark, ShoppingBag, Factory, GraduationCap, Truck, Building } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | MANYA Soft Solutions",
  description: "Enterprise software and digital transformation tailored to Healthcare, Finance, Retail, Manufacturing, and more.",
};

const industries = [
  { icon: HeartPulse, slug: "healthcare", name: "Healthcare", desc: "HIPAA-compliant platforms, EHR integrations, and scalable telehealth architectures." },
  { icon: Landmark, slug: "finance", name: "Finance & Fintech", desc: "Zero-latency trading platforms, secure payment gateways, and regulatory compliance." },
  { icon: ShoppingBag, slug: "retail", name: "Retail & E-commerce", desc: "Omnichannel inventory, headless commerce, and massive-scale storefronts." },
  { icon: Factory, slug: "manufacturing", name: "Manufacturing", desc: "IIoT integration, predictive maintenance, and global supply chain visibility." },
  { icon: GraduationCap, slug: "education", name: "Education", desc: "Scalable Learning Management Systems and secure student data portals." },
  { icon: Truck, slug: "logistics", name: "Logistics", desc: "Route optimization algorithms and real-time fleet tracking networks." },
  { icon: Building, slug: "real-estate", name: "Real Estate", desc: "PropTech platforms, virtual tours, and automated lease management." }
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white py-24 border-b border-border-default overflow-hidden">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealAnimation>
              <SectionHeader
                eyebrow="DOMAIN EXPERTISE"
                heading="Specialized Industry Solutions"
                subheading="We don't just write code; we understand your business model. Our domain experts build software designed specifically for the regulatory and operational realities of your sector."
              />
            </RevealAnimation>
            <RevealAnimation delay={0.2} className="hidden lg:flex justify-end">
              <div className="w-[80%] aspect-square bg-[#EEF3FB] rounded-full relative">
                <div className="absolute inset-4 bg-brand-primary rounded-full opacity-10"></div>
                <div className="absolute inset-8 bg-brand-primary rounded-full opacity-20"></div>
                {/* Abstract geometric shapes representing different industries coming together */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-20 h-20 bg-brand-primary rounded-tr-3xl rounded-bl-3xl"></div>
                    <div className="w-20 h-20 bg-brand-highlight rounded-full"></div>
                    <div className="w-20 h-20 bg-accent-green rounded-tl-3xl rounded-br-3xl"></div>
                    <div className="w-20 h-20 bg-[#0B1F3A] rotate-45"></div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </PageContainer>
      </section>

      <section className="bg-brand-secondary py-24 text-white">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <RevealAnimation key={ind.slug} delay={i * 0.1}>
                <Link href={`/industries/${ind.slug}`} className="block h-full group">
                  <div className="bg-[#142036] border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-brand-primary transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-brand-highlight group-hover:text-white group-hover:bg-white/20 transition-colors mb-6">
                      <ind.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{ind.name}</h3>
                    <p className="text-white/60 leading-relaxed mb-8 flex-1 group-hover:text-white/90 transition-colors">
                      {ind.desc}
                    </p>
                    <span className="font-semibold text-brand-highlight group-hover:text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Capabilities <span>&rarr;</span>
                    </span>
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
