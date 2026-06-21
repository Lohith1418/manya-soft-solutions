import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Why Choose Us | MANYA Soft Solutions",
};

const pillars = [
  { 
    title: "Delivery Certainty", 
    desc: "Fixed-scope projects delivered on time. No exceptions.",
    details: "Our proprietary agile methodology combines rigorous upfront scoping with flexible sprint execution, ensuring you get exactly what was promised, exactly when it was promised."
  },
  { 
    title: "Enterprise-Grade Security", 
    desc: "ISO-aligned development practices and secure code review.",
    details: "Security isn't an afterthought. We implement DevSecOps from day one, with automated vulnerability scanning, strict role-based access controls, and compliance-ready architectures."
  },
  { 
    title: "Dedicated Account Management", 
    desc: "A named account manager who knows your business.",
    details: "You will never be passed around a call center. You get a direct line to a technical account manager who understands your business goals and technical stack intimately."
  },
  { 
    title: "Transparent Pricing", 
    desc: "Clear estimates upfront. No hidden costs.",
    details: "Whether operating on a fixed-bid or time-and-materials basis, our financial models are entirely transparent. You'll see exactly where every dollar goes."
  },
  { 
    title: "Full IP Ownership", 
    desc: "Every line of code we write is yours. No licensing locks.",
    details: "We build it, but you own it. We hand over the entire repository, documentation, and cloud environments. You are never held hostage by proprietary vendor locks."
  },
  { 
    title: "24/7 Support SLA", 
    desc: "Tiered support plans with guaranteed response times.",
    details: "Deployment is just the beginning. Our managed services team provides continuous monitoring, automated backups, and rapid incident response to keep your systems online."
  }
];

export default function WhyUsPage() {
  return (
    <div className="flex flex-col gap-12">
      <RevealAnimation>
        <h2 className="text-3xl font-bold text-text-primary mb-6">Why Partner With Us?</h2>
        <p className="text-lg text-text-secondary max-w-3xl mb-12">
          70% of enterprise IT projects fail to deliver their intended ROI. We built MANYA Soft Solutions to be the exception. Here is how we ensure your success.
        </p>

        <div className="flex flex-col gap-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex gap-6 items-start bg-white p-8 rounded-2xl border border-border-default shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#EEF3FB] text-brand-primary flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{pillar.title}</h3>
                <p className="text-brand-primary font-medium mb-4">{pillar.desc}</p>
                <p className="text-text-secondary leading-relaxed">{pillar.details}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealAnimation>
    </div>
  );
}
