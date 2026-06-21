"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="w-full bg-gradient-hero py-24 text-white">
      <PageContainer>
        <RevealAnimation className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            The organizations that win the next decade are building their technology advantage today. Whether you need to modernize legacy systems, launch a new digital product, or migrate to the cloud — our team is ready to engage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="bg-white text-brand-primary border-white hover:bg-surface-muted w-full sm:w-auto" asChild>
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Send Us a Message</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/60 mt-4">
            <ShieldCheck size={16} />
            <span>No commitment. No spam. Your data is safe with us. We respond within 24 hours.</span>
          </div>
        </RevealAnimation>
      </PageContainer>
    </section>
  );
}
