"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { MapPin, Clock, Users } from "lucide-react";

export function DeliveryModelSection() {
  return (
    <section className="w-full bg-surface-subtle py-24">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Sidebar */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <SectionHeader
              eyebrow="GLOBAL REACH"
              heading="Enterprise Delivery Model"
              subheading="India-headquartered technical excellence, with global timezone coverage and dedicated delivery pods."
            />
            
            <div className="flex flex-col gap-6 mt-4">
              <RevealAnimation delay={0.1}>
                <div className="bg-white p-6 rounded-2xl border border-border-default shadow-sm flex items-start gap-4">
                  <div className="bg-[#EEF3FB] text-brand-primary p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">India HQ (Tirupati)</h4>
                    <p className="text-text-secondary text-sm">State-of-the-art offshore delivery center housing our core engineering and architecture teams.</p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <div className="bg-white p-6 rounded-2xl border border-border-default shadow-sm flex items-start gap-4">
                  <div className="bg-[#EEF3FB] text-brand-primary p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Global Timezone Coverage</h4>
                    <p className="text-text-secondary text-sm">Overlapping hours with US, EU, and APAC clients for agile ceremonies and real-time collaboration.</p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <div className="bg-white p-6 rounded-2xl border border-border-default shadow-sm flex items-start gap-4">
                  <div className="bg-[#EEF3FB] text-brand-primary p-3 rounded-full">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Dedicated Pods</h4>
                    <p className="text-text-secondary text-sm">Self-organizing, cross-functional teams assigned specifically to your account.</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Map Visual */}
          <RevealAnimation delay={0.3} className="order-1 lg:order-2 h-full min-h-[400px] bg-white rounded-3xl border border-border-default flex items-center justify-center p-8 relative overflow-hidden shadow-sm">
             {/* Abstract Map Representation */}
             <svg viewBox="0 0 1000 500" className="w-full h-auto text-border-strong opacity-50" fill="currentColor">
               {/* Simplified dotted map path for aesthetic */}
               <path d="M150,150 Q200,100 250,150 T350,150 T450,200 T550,150 T650,250 T750,200 T850,250" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
               <circle cx="250" cy="150" r="10" />
               <circle cx="450" cy="200" r="10" />
               <circle cx="650" cy="250" r="10" />
               <circle cx="750" cy="200" r="15" className="text-brand-primary opacity-100" />
             </svg>
             
             {/* Pin overlay */}
             <div className="absolute top-[40%] right-[25%] flex flex-col items-center">
               <div className="w-4 h-4 bg-brand-primary rounded-full animate-ping absolute"></div>
               <div className="w-4 h-4 bg-brand-primary rounded-full relative z-10 border-2 border-white"></div>
               <div className="mt-2 bg-brand-secondary text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                 TIRUPATI
               </div>
             </div>
          </RevealAnimation>

        </div>
      </PageContainer>
    </section>
  );
}
