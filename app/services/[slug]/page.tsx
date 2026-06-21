import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeScroll } from "@/components/animations/CodeScroll";

// Mock data base for dynamic routes
const serviceData: Record<string, { title: string; subtitle: string; offerings: string[]; tech: string[] }> = {
  "software-development": {
    title: "Enterprise Software Development",
    subtitle: "Custom applications architected for high availability, security, and limitless scale.",
    offerings: ["Custom Web Applications", "API Development & Integration", "Microservices Architecture", "Legacy System Modernization"],
    tech: ["React", "Node.js", "Python", "Java", "Go", "PostgreSQL"]
  },
  "cloud-solutions": {
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Accelerate delivery and reduce operational overhead with robust cloud architectures.",
    offerings: ["Cloud Migration Strategy", "Serverless Architectures", "CI/CD Pipeline Automation", "Infrastructure as Code (IaC)"],
    tech: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
  },
  "ai-solutions": {
    title: "AI & Machine Learning",
    subtitle: "Turn data into your most valuable asset with predictive models and intelligent automation.",
    offerings: ["Large Language Model (LLM) Integration", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
    tech: ["TensorFlow", "PyTorch", "OpenAI API", "Python", "Hugging Face"]
  }
  // Others fall back to a generic template for this demo
};

export function generateStaticParams() {
  return [
    { slug: "software-development" },
    { slug: "mobile-app-development" },
    { slug: "cloud-solutions" },
    { slug: "ai-solutions" },
    { slug: "it-consulting" },
    { slug: "digital-transformation" },
    { slug: "enterprise-software" },
    { slug: "web-applications" },
    { slug: "technology-consulting" },
    { slug: "managed-it" },
  ];
}

export default async function ServiceDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  
  const data = serviceData[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    subtitle: "Enterprise-grade solutions tailored to your unique operational requirements and strategic goals.",
    offerings: ["Strategic Planning", "Architecture Design", "Implementation & Execution", "Continuous Optimization"],
    tech: ["Enterprise Stacks", "Modern Frameworks", "Cloud Native", "Secure Infrastructure"]
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-secondary text-white py-24 relative overflow-hidden">
        <PageContainer className={`relative z-10 ${slug === "software-development" ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]" : ""}`}>
          <RevealAnimation className={slug === "software-development" ? "max-w-2xl" : "max-w-3xl"}>
            <Link href="/services" className="text-brand-highlight text-sm font-semibold uppercase tracking-widest mb-6 inline-flex items-center gap-2 hover:underline">
              &larr; Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {data.subtitle}
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </RevealAnimation>

          {/* Right Column: Code Animation (Only for Software Development) */}
          {slug === "software-development" && (
            <RevealAnimation delay={0.2} className="hidden lg:block relative h-[400px] w-full">
              <CodeScroll />
            </RevealAnimation>
          )}
        </PageContainer>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Offerings */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <RevealAnimation>
                <h2 className="text-3xl font-bold text-text-primary mb-8">What We Do</h2>
                <div className="flex flex-col gap-6">
                  {data.offerings.map((offering, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 bg-surface-subtle rounded-2xl border border-border-default">
                      <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={24} />
                      <h3 className="text-xl font-bold text-text-primary">{offering}</h3>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            </div>

            {/* Tech Stack Sidebar */}
            <div className="lg:col-span-5">
              <RevealAnimation delay={0.2} className="sticky top-[100px] bg-surface-muted rounded-3xl p-8 border border-border-default">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {data.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-text-secondary border border-border-default shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-border-strong">
                  <h4 className="font-bold text-lg mb-4">Ready to modernize?</h4>
                  <p className="text-text-secondary text-sm mb-6">Our architects are ready to audit your current stack and propose a scalable path forward.</p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/contact">Book a Tech Review <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                </div>
              </RevealAnimation>
            </div>

          </div>
        </PageContainer>
      </section>
    </>
  );
}
