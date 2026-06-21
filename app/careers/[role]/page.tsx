import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return [
    { role: "senior-frontend-engineer" },
    { role: "cloud-infrastructure-architect" },
    { role: "machine-learning-researcher" },
    { role: "enterprise-account-executive" }
  ];
}

export default async function JobDetailPage(props: { params: Promise<{ role: string }> }) {
  const params = await props.params;
  const role = params.role;
  
  const title = role.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <>
      <section className="bg-surface-subtle pt-32 pb-16 border-b border-border-default">
        <PageContainer>
          <RevealAnimation className="max-w-4xl">
            <Link href="/careers" className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-8 inline-flex items-center gap-2 hover:underline">
              <ArrowLeft size={16} /> Back to Careers
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white border border-border-strong rounded-md text-xs font-bold text-text-primary uppercase tracking-widest">Engineering</span>
              <span className="px-3 py-1 bg-white border border-border-strong rounded-md text-xs font-bold text-text-primary uppercase tracking-widest">Remote / Tirupati</span>
              <span className="px-3 py-1 bg-white border border-border-strong rounded-md text-xs font-bold text-text-primary uppercase tracking-widest">Full-Time</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display text-text-primary tracking-tight mb-8">
              {title}
            </h1>
            <Button size="lg" variant="default" asChild>
              <a href="mailto:careers@manyasoft.com?subject=Application for {title}">Apply Now</a>
            </Button>
          </RevealAnimation>
        </PageContainer>
      </section>

      <section className="py-24 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 prose prose-lg max-w-none text-text-secondary">
              <RevealAnimation>
                <h2 className="text-2xl font-bold text-text-primary mt-0">About the Role</h2>
                <p>
                  We are looking for an exceptional {title} to join our core engineering team. You will be responsible for architecting and building high-performance, scalable enterprise applications used by Fortune 500 clients globally.
                </p>
                <p>
                  At MANYA Soft Solutions, you will work in an agile, fast-paced environment where your code directly impacts millions of end-users. We value engineers who are passionate about clean architecture, test-driven development, and continuous integration.
                </p>

                <h2 className="text-2xl font-bold text-text-primary mt-12">What You'll Do</h2>
                <ul className="list-none pl-0 space-y-4">
                  {[
                    "Architect and implement robust technical solutions for complex enterprise challenges.",
                    "Collaborate with product managers, designers, and other engineers to define system architecture.",
                    "Mentor junior engineers and lead code reviews to maintain high quality standards.",
                    "Identify performance bottlenecks and optimize applications for maximum speed and scalability."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start m-0">
                      <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-text-primary mt-12">Requirements</h2>
                <ul className="list-none pl-0 space-y-4">
                  {[
                    "5+ years of production experience in enterprise software development.",
                    "Deep understanding of modern system design and cloud architecture.",
                    "Experience with CI/CD pipelines, containerization (Docker/K8s), and cloud platforms (AWS/GCP).",
                    "Strong communication skills and the ability to articulate technical decisions to stakeholders."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start m-0">
                      <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>

            <div className="lg:col-span-4">
              <RevealAnimation delay={0.2} className="sticky top-[100px] bg-surface-subtle rounded-3xl p-8 border border-border-default">
                <h3 className="text-xl font-bold text-text-primary mb-6">Why MANYA Soft Solutions?</h3>
                <div className="flex flex-col gap-4 text-text-secondary text-sm font-medium mb-8">
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-primary"/> Highly Competitive Compensation</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-primary"/> Fully Remote or Hybrid Flexibility</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-primary"/> Comprehensive Health Coverage</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-primary"/> Generous Learning & Development Budget</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-primary"/> Latest MacBooks and Home Office Stipend</div>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <a href={`mailto:careers@manyasoft.com?subject=Application for ${title}`}>Apply via Email</a>
                </Button>
              </RevealAnimation>
            </div>

          </div>
        </PageContainer>
      </section>
    </>
  );
}
