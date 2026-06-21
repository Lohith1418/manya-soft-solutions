import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "national-telehealth-portal" },
    { slug: "zero-latency-trading" },
    { slug: "headless-commerce" },
    { slug: "smart-factory" },
    { slug: "supply-chain-visibility" },
    { slug: "proptech-automation" }
  ];
}

export default async function CaseStudyDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  return (
    <>
      <section className="bg-brand-secondary text-white pt-32 pb-24">
        <PageContainer>
          <RevealAnimation className="max-w-4xl">
            <Link href="/case-studies" className="text-brand-highlight text-sm font-semibold uppercase tracking-widest mb-8 inline-flex items-center gap-2 hover:underline">
              <ArrowLeft size={16} /> Back to Case Studies
            </Link>
            <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Enterprise Transformation
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display leading-tight mb-8">
              {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </h1>
          </RevealAnimation>
        </PageContainer>
      </section>

      <section className="py-24 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 prose prose-lg max-w-none">
              <RevealAnimation>
                <h2 className="text-3xl font-bold text-text-primary">The Challenge</h2>
                <p className="text-text-secondary">
                  Our client faced significant technical debt, battling monolithic architecture that restricted scalability. During peak operational hours, system latency spiked, leading to an unacceptable degradation of user experience and potential revenue loss.
                </p>

                <div className="my-12 p-8 bg-surface-subtle border-l-4 border-brand-primary rounded-r-2xl">
                  <p className="text-xl font-medium text-brand-primary italic m-0">
                    "We needed a partner who could completely overhaul our underlying infrastructure without a single minute of downtime. MANYA delivered exactly that."
                  </p>
                  <span className="block mt-4 text-sm font-bold text-text-primary uppercase tracking-widest">— Chief Technology Officer</span>
                </div>

                <h2 className="text-3xl font-bold text-text-primary">The Solution</h2>
                <p className="text-text-secondary">
                  We engineered a complete migration from legacy monolithic systems to a resilient microservices architecture hosted on modern cloud infrastructure. By decoupling core services and introducing in-memory caching layers, we ensured instantaneous data retrieval and high availability.
                </p>
                
                <h2 className="text-3xl font-bold text-text-primary">The Result</h2>
                <p className="text-text-secondary">
                  The new architecture supports 10x the previous traffic volume with zero latency degradation. Infrastructure costs were reduced by 40% due to efficient auto-scaling rules.
                </p>
              </RevealAnimation>
            </div>

            <div className="lg:col-span-4">
              <RevealAnimation delay={0.2} className="sticky top-[100px] flex flex-col gap-6">
                <div className="bg-[#142036] text-white rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-6">Impact Metrics</h3>
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="block text-4xl font-black font-display text-brand-highlight mb-1">10x</span>
                      <span className="text-sm font-medium text-white/70">Traffic Capacity Increase</span>
                    </div>
                    <div>
                      <span className="block text-4xl font-black font-display text-brand-highlight mb-1">40%</span>
                      <span className="text-sm font-medium text-white/70">Cost Reduction</span>
                    </div>
                    <div>
                      <span className="block text-4xl font-black font-display text-brand-highlight mb-1">0</span>
                      <span className="text-sm font-medium text-white/70">Minutes of Downtime</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-subtle rounded-3xl p-8 border border-border-default">
                  <h3 className="text-xl font-bold mb-4 text-text-primary">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Kubernetes", "Node.js", "PostgreSQL", "Redis", "AWS", "Terraform"].map(t => (
                      <span key={t} className="px-3 py-1 bg-white border border-border-strong rounded-md text-xs font-bold text-text-secondary">{t}</span>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            </div>

          </div>
        </PageContainer>
      </section>
    </>
  );
}
