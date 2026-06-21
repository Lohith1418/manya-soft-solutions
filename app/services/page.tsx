import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Code2, Smartphone, Cloud, Bot, Lightbulb, Workflow, Building2, MonitorSmartphone, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Technology Services | MANYA Soft Solutions",
  description: "End-to-end enterprise technology services including software development, cloud, AI, and digital transformation.",
};

const services = [
  { icon: Code2, slug: "software-development", name: "Software Development", desc: "Custom enterprise applications built with modern stacks for scale and resilience." },
  { icon: Smartphone, slug: "mobile-app-development", name: "Mobile Apps", desc: "Native iOS and Android experiences with seamless cross-platform functionality." },
  { icon: Cloud, slug: "cloud-solutions", name: "Cloud Solutions", desc: "AWS, Azure, and GCP migrations, DevOps pipelines, and serverless architectures." },
  { icon: Bot, slug: "ai-solutions", name: "AI Solutions", desc: "Machine learning models, LLM integration, and intelligent process automation." },
  { icon: Lightbulb, slug: "it-consulting", name: "IT Consulting", desc: "Strategic advisory, roadmap planning, and technology due diligence." },
  { icon: Workflow, slug: "digital-transformation", name: "Digital Transformation", desc: "Process modernization and legacy system overhauls." },
  { icon: Building2, slug: "enterprise-software", name: "Enterprise Software", desc: "ERP, CRM, and custom operational platforms." },
  { icon: MonitorSmartphone, slug: "web-applications", name: "Web Applications", desc: "High-performance SaaS and full-stack web platforms." },
  { icon: Cpu, slug: "technology-consulting", name: "Technology Consulting", desc: "Architecture review, scaling strategies, and technical advisory." },
  { icon: ShieldCheck, slug: "managed-it", name: "Managed IT", desc: "L1/L2/L3 support, infrastructure monitoring, and security management." }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-secondary text-white py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,239,0.1),transparent_50%)]"></div>
        <PageContainer className="relative z-10">
          <SectionHeader
            eyebrow="OUR EXPERTISE"
            heading={<span className="text-white">End-to-End Technology Services</span>}
            subheading={<span className="text-white/70">From initial architecture to global deployment, we provide the full spectrum of technical capabilities required to modernize and scale your enterprise.</span>}
            className="max-w-4xl"
          />
        </PageContainer>
      </section>

      <section className="bg-surface-subtle py-24">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <RevealAnimation key={i} delay={i * 0.05}>
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <div className="bg-white rounded-2xl p-8 border border-border-default h-full flex flex-col hover:shadow-lg hover:border-brand-primary transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#EEF3FB] text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors relative z-10">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">{service.name}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1 relative z-10">
                      {service.desc}
                    </p>
                    <span className="text-brand-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all relative z-10">
                      Explore Service <span>&rarr;</span>
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
