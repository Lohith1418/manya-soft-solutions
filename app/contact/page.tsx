"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call to /api/contact
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <>
      <section className="bg-surface-subtle pt-32 pb-16 border-b border-border-default">
        <PageContainer>
          <RevealAnimation className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black font-display text-text-primary tracking-tight mb-6">Let's build something exceptional.</h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Whether you're looking to modernize legacy infrastructure or build a scalable AI application from scratch, our engineering teams are ready to execute.
            </p>
          </RevealAnimation>
        </PageContainer>
      </section>

      <section className="py-24 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <RevealAnimation>
                <h2 className="text-3xl font-bold text-text-primary mb-8">Send an Inquiry</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-bold text-text-primary">Full Name</label>
                      <input id="name" type="text" required className="px-4 py-3 rounded-lg border border-border-strong bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-bold text-text-primary">Work Email</label>
                      <input id="email" type="email" required className="px-4 py-3 rounded-lg border border-border-strong bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-sm font-bold text-text-primary">Company Name</label>
                      <input id="company" type="text" className="px-4 py-3 rounded-lg border border-border-strong bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all" placeholder="Acme Corp" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-sm font-bold text-text-primary">Service of Interest</label>
                      <select id="service" className="px-4 py-3 rounded-lg border border-border-strong bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all text-text-primary">
                        <option value="software">Custom Software Development</option>
                        <option value="cloud">Cloud Infrastructure</option>
                        <option value="ai">AI & Machine Learning</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-bold text-text-primary">Project Details</label>
                    <textarea id="message" required rows={5} className="px-4 py-3 rounded-lg border border-border-strong bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-none" placeholder="Tell us about your technical challenges and business goals..."></textarea>
                  </div>

                  <Button type="submit" size="lg" disabled={status === "loading" || status === "success"} className="w-full md:w-auto self-start mt-4">
                    {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Submit Inquiry"}
                  </Button>
                  
                  {status === "success" && (
                    <p className="text-accent-green font-semibold mt-2">Thank you! An account manager will be in touch within 24 hours.</p>
                  )}
                </form>
              </RevealAnimation>
            </div>

            {/* Global Offices */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <RevealAnimation delay={0.2}>
                <h2 className="text-3xl font-bold text-text-primary mb-8">Global Offices</h2>
                
                <div className="bg-surface-subtle p-8 rounded-2xl border border-border-default mb-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-2 h-full bg-brand-primary"></div>
                  <h3 className="text-xl font-bold text-text-primary flex items-center gap-2 mb-4">
                    <MapPin className="text-brand-primary" size={20} /> India HQ (Tirupati)
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    MANYA Soft Solutions Pvt Ltd.<br />
                    Tirupati, Andhra Pradesh<br />
                    India
                  </p>
                  <div className="flex items-center gap-3 text-text-secondary text-sm">
                    <Phone size={16} className="text-brand-primary" /> +91 98765 43210
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-border-default mb-6 hover:border-brand-primary transition-colors">
                  <h3 className="text-xl font-bold text-text-primary flex items-center gap-2 mb-4">
                    <MapPin className="text-text-secondary" size={20} /> North America
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    100 Tech Corridor Suite 400<br />
                    Austin, TX 78701<br />
                    United States
                  </p>
                </div>

                <div className="bg-[#142036] p-8 rounded-2xl border border-white/10 text-white">
                  <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:contact@manyasoft.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                      <Mail size={18} className="text-brand-highlight" /> contact@manyasoft.com
                    </a>
                    <a href="mailto:careers@manyasoft.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                      <Mail size={18} className="text-brand-highlight" /> careers@manyasoft.com
                    </a>
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
