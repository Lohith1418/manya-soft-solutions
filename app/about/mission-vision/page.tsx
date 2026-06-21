import { RevealAnimation } from "@/components/shared/RevealAnimation";

export const metadata = {
  title: "Mission & Vision | MANYA Soft Solutions",
};

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col gap-16">
      
      {/* Mission Statement */}
      <RevealAnimation>
        <span className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-4 block">Our Mission</span>
        <h2 className="text-4xl md:text-5xl font-black font-display text-text-primary leading-tight mb-6">
          To architect the digital foundations of tomorrow's market leaders.
        </h2>
        <div className="w-20 h-2 bg-brand-highlight mb-8"></div>
        <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
          We believe technology should never be a constraint. Our mission is to eliminate technical debt, modernize legacy infrastructure, and build robust software ecosystems that empower our clients to scale limitlessly and operate flawlessly.
        </p>
      </RevealAnimation>

      {/* Vision Statement */}
      <RevealAnimation delay={0.1}>
        <div className="bg-[#142036] text-white p-10 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-highlight/20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10">
            <span className="text-sm font-bold tracking-widest text-brand-highlight uppercase mb-4 block">Our Vision</span>
            <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
              To be the most trusted technology partner for enterprises demanding excellence without compromise.
            </h3>
            <p className="text-lg text-white/70 max-w-2xl">
              By 2030, MANYA Soft Solutions aims to be recognized globally not just for the code we write, but for the fundamental business transformations we catalyze.
            </p>
          </div>
        </div>
      </RevealAnimation>

      {/* Core Values */}
      <RevealAnimation delay={0.2}>
        <h2 className="text-3xl font-bold text-text-primary mb-8">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-l-4 border-brand-primary pl-6">
            <h4 className="text-xl font-bold mb-2">Absolute Transparency</h4>
            <p className="text-text-secondary">No black boxes. We communicate technical decisions, project status, and potential risks openly and proactively.</p>
          </div>
          <div className="border-l-4 border-brand-primary pl-6">
            <h4 className="text-xl font-bold mb-2">Engineering Excellence</h4>
            <p className="text-text-secondary">We write clean, documented, and scalable code. We do not take shortcuts that compromise long-term stability.</p>
          </div>
          <div className="border-l-4 border-brand-primary pl-6">
            <h4 className="text-xl font-bold mb-2">Outcome-Driven</h4>
            <p className="text-text-secondary">Technology for technology's sake is waste. We tie every architectural decision directly to a tangible business outcome.</p>
          </div>
          <div className="border-l-4 border-brand-primary pl-6">
            <h4 className="text-xl font-bold mb-2">Continuous Evolution</h4>
            <p className="text-text-secondary">In a rapidly shifting tech landscape, we aggressively upskill our teams to ensure our clients always leverage the best modern practices.</p>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
}
