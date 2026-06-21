import { PageContainer } from "@/components/shared/PageContainer";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export function MetricsSection() {
  const metrics = [
    { value: 200, suffix: "+", label: "Projects Delivered", desc: "Successfully deployed globally" },
    { value: 50, suffix: "+", label: "Enterprise Clients", desc: "Trusted by industry leaders" },
    { value: 15, suffix: "+", label: "Years Combined Expertise", desc: "Deep technical knowledge" },
    { value: 98, suffix: "%", label: "Client Retention", desc: "Long-term strategic partnerships" },
  ];

  return (
    <section className="w-full bg-[linear-gradient(90deg,#0057D9,#0B1F3A)] py-20 text-white">
      <PageContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-[56px] font-black font-display tracking-tight text-white/90 drop-shadow-md">
                <AnimatedCounter value={m.value} suffix={m.suffix} duration={1.5} />
              </div>
              <h3 className="text-xl font-bold">{m.label}</h3>
              <p className="text-white/60 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
