import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, Cloud, Network } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Careers | MANYA Soft Solutions",
};

const positions = [
  { slug: "senior-frontend-engineer", title: "Senior Frontend Engineer (React/Next.js)", dept: "Engineering", location: "Tirupati / Remote", type: "Full-time" },
  { slug: "cloud-infrastructure-architect", title: "Cloud Infrastructure Architect", dept: "DevOps", location: "Tirupati / Remote", type: "Full-time" },
  { slug: "machine-learning-researcher", title: "Machine Learning Researcher", dept: "AI Labs", location: "Remote", type: "Full-time" },
  { slug: "enterprise-account-executive", title: "Enterprise Account Executive", dept: "Sales", location: "US / Remote", type: "Full-time" }
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-brand-secondary text-white py-24 border-b border-white/10 relative overflow-hidden">
        <PageContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealAnimation>
              <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mb-6 leading-tight">
                Build software that <span className="text-brand-highlight">moves the world</span>.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Join a collective of elite engineers, architects, and visionaries building mission-critical platforms for global enterprises.
              </p>
              <Button size="lg" variant="default" asChild>
                <a href="#open-roles">View Open Roles</a>
              </Button>
            </RevealAnimation>
            
            <RevealAnimation delay={0.2} className="hidden lg:grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-end">
                <Code className="text-brand-highlight mb-4" size={32}/>
                <span className="font-bold">Engineering Excellence</span>
              </div>
              <div className="aspect-square bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-end translate-y-8">
                <Cloud className="text-brand-highlight mb-4" size={32}/>
                <span className="font-bold">Cloud Native</span>
              </div>
            </RevealAnimation>
          </div>
        </PageContainer>
      </section>

      <section className="py-24 bg-white" id="open-roles">
        <PageContainer>
          <RevealAnimation>
            <SectionHeader
              eyebrow="OPEN POSITIONS"
              heading="Join the Team"
              subheading="Don't see a perfect fit? Send your resume to careers@manyasoft.com. We're always looking for exceptional talent."
            />
          </RevealAnimation>

          <div className="flex flex-col gap-4 mt-12 max-w-4xl">
            {positions.map((pos, i) => (
              <RevealAnimation key={pos.slug} delay={i * 0.1}>
                <Link href={`/careers/${pos.slug}`} className="group block">
                  <div className="bg-surface-subtle border border-border-default rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-primary hover:shadow-md transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm border border-border-strong shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">{pos.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm font-medium text-text-secondary">
                          <span>{pos.dept}</span>
                          <span className="w-1 h-1 rounded-full bg-border-strong"></span>
                          <span>{pos.location}</span>
                          <span className="w-1 h-1 rounded-full bg-border-strong"></span>
                          <span>{pos.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="secondary" className="group-hover:bg-brand-primary group-hover:text-white shrink-0 border border-border-strong">
                      View Details
                    </Button>
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
