"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Company Overview", href: "/about" },
  { name: "Leadership Team", href: "/about/leadership" },
  { name: "Mission & Vision", href: "/about/mission-vision" },
  { name: "Why Choose Us", href: "/about/why-us" },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Interior Hero */}
      <section className="bg-brand-secondary text-white py-20 border-b border-white/10">
        <PageContainer>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">About Us</h1>
            <p className="text-lg text-white/70">
              Discover the team, the vision, and the values driving enterprise transformation at MANYA Soft Solutions.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Main Content Layout */}
      <PageContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-[100px] flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4 block">
                Navigation
              </span>
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm font-semibold transition-all",
                      isActive
                        ? "bg-[#EEF3FB] text-brand-primary"
                        : "text-text-secondary hover:bg-surface-subtle hover:text-text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-9">
            {children}
          </main>

        </div>
      </PageContainer>
    </>
  );
}
