import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data base for dynamic routes
const industryData: Record<string, { title: string; subtitle: string; challenges: string[]; solutions: string[]; caseStudyTitle: string; caseStudyMetric: string }> = {
  "healthcare": {
    title: "Healthcare Technology Solutions",
    subtitle: "Modernize patient experiences and secure interoperable health data ecosystems.",
    challenges: ["Strict HIPAA and PIPEDA Compliance Requirements", "Disjointed Legacy Electronic Health Records (EHR)", "Scaling Telehealth Infrastructure during Peak Load"],
    solutions: ["End-to-End Encrypted Data Pipelines", "HL7/FHIR Compliant API Integration Layers", "High-Concurrency Video Streaming Architectures"],
    caseStudyTitle: "National Telehealth Portal Scaled to 2M+ Active Users",
    caseStudyMetric: "99.99% Uptime SLA Maintained"
  },
  "finance": {
    title: "Finance & Fintech Solutions",
    subtitle: "Architecting the infrastructure for modern, frictionless, and secure financial transactions.",
    challenges: ["Millisecond Latency Requirements for Trading", "Real-Time Fraud Detection at Scale", "Complex Regulatory Reporting (PCI-DSS, SOC2)"],
    solutions: ["In-Memory Data Grid Architectures (Redis, Kafka)", "Machine Learning Anomaly Detection Pipelines", "Immutable Audit Logging Systems"],
    caseStudyTitle: "Zero-Latency Trading Platform Modernization",
    caseStudyMetric: "40% Cost Reduction in Infra Compute"
  }
  // Others fall back to a generic template for this demo
};

export function generateStaticParams() {
  return [
    { slug: "healthcare" },
    { slug: "finance" },
    { slug: "retail" },
    { slug: "manufacturing" },
    { slug: "education" },
    { slug: "logistics" },
    { slug: "real-estate" }
  ];
}

export default async function IndustryDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  
  const data = industryData[slug] || {
    title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Technology Solutions`,
    subtitle: "Overcome sector-specific challenges with purpose-built software architectures.",
    challenges: ["Siloed Legacy Systems and Technical Debt", "Manual and Inefficient Operational Workflows", "Lack of Real-Time Data Visibility"],
    solutions: ["Custom Middleware for System Integration", "AI-Powered Process Automation", "Real-Time BI Dashboards and Reporting"],
    caseStudyTitle: `Enterprise Digital Transformation for Leading ${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Firm`,
    caseStudyMetric: "300% ROI within 12 Months"
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-muted py-24 border-b border-border-default">
        <PageContainer>
          <RevealAnimation className="max-w-4xl">
            <Link href="/industries" className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-6 inline-flex items-center gap-2 hover:underline">
              &larr; Back to Industries
            </Link>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-text-primary mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {data.subtitle}
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="/contact">Consult an Industry Expert</Link>
            </Button>
          </RevealAnimation>
        </PageContainer>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Challenges */}
            <RevealAnimation>
              <h2 className="text-3xl font-bold text-text-primary mb-8">Industry Challenges</h2>
              <div className="flex flex-col gap-6">
                {data.challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-red-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold">!</div>
                    <h3 className="text-lg font-bold text-text-primary mt-1">{challenge}</h3>
                  </div>
                ))}
              </div>
            </RevealAnimation>

            {/* Solutions */}
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-bold text-text-primary mb-8">Our Solutions</h2>
              <div className="flex flex-col gap-6">
                {data.solutions.map((solution, i) => (
                  <div key={i} className="flex gap-4 items-start p-6 bg-[#EEF3FB] rounded-2xl border border-brand-primary/20 shadow-sm">
                    <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={24} />
                    <h3 className="text-lg font-bold text-text-primary mt-1">{solution}</h3>
                  </div>
                ))}
              </div>
            </RevealAnimation>

          </div>
        </PageContainer>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-brand-secondary text-white">
        <PageContainer>
          <RevealAnimation>
            <div className="bg-[#142036] rounded-3xl border border-white/10 p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
              <span className="text-xs uppercase tracking-widest font-bold text-white/50">Featured Success Story</span>
              <h2 className="text-3xl md:text-4xl font-bold">{data.caseStudyTitle}</h2>
              <div className="text-5xl font-black font-display text-brand-highlight my-4">{data.caseStudyMetric}</div>
              <Button variant="secondary" className="border-white/20 hover:bg-white/10 text-white mt-4" asChild>
                <Link href="/case-studies">Read Full Case Study</Link>
              </Button>
            </div>
          </RevealAnimation>
        </PageContainer>
      </section>
    </>
  );
}
