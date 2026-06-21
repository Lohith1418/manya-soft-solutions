import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Case Studies & Portfolio | MANYA Soft Solutions",
};

const caseStudies = [
  { slug: "national-telehealth-portal", category: "Healthcare", title: "National Telehealth Portal Scaled to 2M+ Users", metric: "99.99% Uptime", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
  { slug: "zero-latency-trading", category: "Finance", title: "Zero-Latency Trading Platform Modernization", metric: "40% Cost Reduction", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" },
  { slug: "headless-commerce", category: "Retail", title: "Scaling E-commerce to 50M Monthly Visits", metric: "3x Conversion Rate", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" },
  { slug: "smart-factory", category: "Manufacturing", title: "Smart Factory Automation via Custom ERP", metric: "60% Faster Workflows", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { slug: "supply-chain-visibility", category: "Logistics", title: "Global Supply Chain Visibility Platform", metric: "Real-time Tracking", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
  { slug: "proptech-automation", category: "Real Estate", title: "Modernizing Property Management Workflows", metric: "10x ROI", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-brand-secondary text-white py-24">
        <PageContainer>
          <RevealAnimation>
            <SectionHeader
              eyebrow="PROVEN IMPACT"
              heading={<span className="text-white">Our Work Speaks for Itself</span>}
              subheading={<span className="text-white/70">Explore how we've helped leading enterprises overcome complex technical challenges, scale their infrastructure, and drive measurable business outcomes.</span>}
              className="max-w-3xl"
            />
          </RevealAnimation>
        </PageContainer>
      </section>

      <section className="py-24 bg-surface-subtle">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <RevealAnimation key={cs.slug} delay={i * 0.1}>
                <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden border border-border-default shadow-sm hover:shadow-xl hover:border-brand-primary transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden bg-surface-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cs.image} alt={cs.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {cs.category}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1 relative">
                      <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <ArrowUpRight size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-4 leading-snug">{cs.title}</h3>
                      <div className="mt-auto pt-6 border-t border-border-strong flex justify-between items-center">
                        <span className="text-sm text-text-secondary font-medium">Key Result</span>
                        <span className="text-brand-highlight font-black font-display text-lg">{cs.metric}</span>
                      </div>
                    </div>
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
