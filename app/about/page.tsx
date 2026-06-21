import { RevealAnimation } from "@/components/shared/RevealAnimation";

export const metadata = {
  title: "Company Overview | MANYA Soft Solutions",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <RevealAnimation>
        <h2 className="text-3xl font-bold text-text-primary mb-6">Our Story</h2>
        <div className="prose prose-lg text-text-secondary max-w-none">
          <p>
            MANYA Soft Solutions was founded with a singular purpose: to bridge the gap between enterprise-grade technology and agile, transparent delivery. Too often, organizations are forced to choose between the reliability of massive global integrators and the speed of boutique agencies. We exist to provide both.
          </p>
          <p>
            Headquartered in Tirupati, India, our global delivery model enables us to tap into world-class engineering talent while maintaining overlap with US, European, and APAC business hours.
          </p>
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <div className="bg-surface-muted p-8 rounded-2xl border border-border-default">
          <h3 className="text-2xl font-bold text-text-primary mb-6">By The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-4xl font-black font-display text-brand-primary mb-2">15+</span>
              <span className="text-sm font-medium text-text-secondary">Years Combined Experience</span>
            </div>
            <div>
              <span className="block text-4xl font-black font-display text-brand-primary mb-2">200+</span>
              <span className="text-sm font-medium text-text-secondary">Projects Delivered</span>
            </div>
            <div>
              <span className="block text-4xl font-black font-display text-brand-primary mb-2">50+</span>
              <span className="text-sm font-medium text-text-secondary">Enterprise Clients</span>
            </div>
            <div>
              <span className="block text-4xl font-black font-display text-brand-primary mb-2">98%</span>
              <span className="text-sm font-medium text-text-secondary">Client Retention Rate</span>
            </div>
          </div>
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.2}>
        <h2 className="text-3xl font-bold text-text-primary mb-6">Global Presence</h2>
        <p className="text-lg text-text-secondary mb-8">
          While our core engineering operations are based in Tirupati, our clients are distributed globally. We operate dedicated pods tailored to the specific timezones and cultural nuances of the organizations we serve.
        </p>
        <div className="aspect-[21/9] bg-brand-secondary rounded-2xl overflow-hidden flex items-center justify-center relative shadow-sm border border-border-default">
           <svg viewBox="0 0 1000 500" className="w-full h-auto text-white opacity-20 absolute" fill="currentColor">
             <path d="M150,150 Q200,100 250,150 T350,150 T450,200 T550,150 T650,250 T750,200 T850,250" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
             <circle cx="250" cy="150" r="10" />
             <circle cx="450" cy="200" r="10" />
             <circle cx="650" cy="250" r="10" />
             <circle cx="750" cy="200" r="15" className="text-brand-highlight opacity-100" />
           </svg>
           <div className="z-10 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold border border-white/20">
             Tirupati HQ
           </div>
        </div>
      </RevealAnimation>
    </div>
  );
}
