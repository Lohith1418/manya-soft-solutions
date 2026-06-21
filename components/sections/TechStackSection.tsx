"use client";

import { useState } from "react";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = ["All", "Frontend", "Backend", "Mobile", "Cloud", "AI/ML", "Database", "DevOps"];

const techStack = [
  { name: "React", category: "Frontend", color: "#61DAFB", slug: "react" },
  { name: "Next.js", category: "Frontend", color: "#000000", slug: "nextdotjs" },
  { name: "Vue.js", category: "Frontend", color: "#4FC08D", slug: "vuedotjs" },
  { name: "Node.js", category: "Backend", color: "#339933", slug: "nodedotjs" },
  { name: "Python", category: "Backend", color: "#3776AB", slug: "python" },
  { name: "Java", category: "Backend", color: "#007396", slug: "openjdk", devicon: "java/java-original" },
  { name: "Go", category: "Backend", color: "#00ADD8", slug: "go" },
  { name: "Swift", category: "Mobile", color: "#F05138", slug: "swift" },
  { name: "Kotlin", category: "Mobile", color: "#7F52FF", slug: "kotlin" },
  { name: "Flutter", category: "Mobile", color: "#02569B", slug: "flutter" },
  { name: "React Native", category: "Mobile", color: "#61DAFB", slug: "react" },
  { name: "AWS", category: "Cloud", color: "#232F3E", slug: "amazonaws", devicon: "amazonwebservices/amazonwebservices-original-wordmark" },
  { name: "Azure", category: "Cloud", color: "#0078D4", slug: "microsoftazure", devicon: "azure/azure-original" },
  { name: "GCP", category: "Cloud", color: "#4285F4", slug: "googlecloud", devicon: "googlecloud/googlecloud-original" },
  { name: "TensorFlow", category: "AI/ML", color: "#FF6F00", slug: "tensorflow" },
  { name: "PyTorch", category: "AI/ML", color: "#EE4C2C", slug: "pytorch" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1", slug: "postgresql" },
  { name: "MongoDB", category: "Database", color: "#47A248", slug: "mongodb" },
  { name: "Redis", category: "Database", color: "#DC382D", slug: "redis" },
  { name: "Docker", category: "DevOps", color: "#2496ED", slug: "docker" },
  { name: "Kubernetes", category: "DevOps", color: "#326CE5", slug: "kubernetes" },
  { name: "Jenkins", category: "DevOps", color: "#D24939", slug: "jenkins" },
];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTech = techStack.filter(tech => activeTab === "All" || tech.category === activeTab);

  return (
    <section className="w-full bg-surface-muted py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="TECHNOLOGY FLUENCY"
          heading="Our Technology Stack"
          subheading="We build with modern, proven technologies that scale securely."
          centered
          className="mb-12"
        />

        <div className="flex flex-col items-center gap-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                  activeTab === tab
                    ? "bg-brand-primary text-white shadow-md"
                    : "bg-white text-text-secondary hover:bg-border-default border border-border-strong"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <RevealAnimation className="w-full">
            <motion.div 
              layout 
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6"
            >
              <AnimatePresence>
                {filteredTech.map((tech) => (
                  <motion.div
                    layout
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="aspect-square bg-white border border-border-default rounded-xl flex flex-col items-center justify-center p-4 gap-2 hover:shadow-md transition-shadow group cursor-default"
                  >
                    <div 
                      className="w-12 h-12 rounded-md bg-surface-muted transition-all duration-300 group-hover:bg-opacity-15 flex items-center justify-center"
                      style={{ backgroundColor: "var(--hover-bg)" } as React.CSSProperties & { "--hover-bg": string }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={
                          "devicon" in tech && typeof tech.devicon === "string"
                            ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.devicon}.svg`
                            : `https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`
                        }
                        alt={tech.name}
                        className="w-8 h-8 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-xs font-medium text-text-secondary text-center leading-tight group-hover:text-text-primary transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </RevealAnimation>
        </div>
      </PageContainer>
    </section>
  );
}
