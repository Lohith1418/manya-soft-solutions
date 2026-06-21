"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: 'import { EnterpriseCluster } from "@manya/core";', color: "text-brand-highlight" },
  { text: 'import { AIProcessor } from "@manya/ai";', color: "text-brand-highlight" },
  { text: "", color: "" },
  { text: "async function initializeSystem(config: Config) {", color: "text-white" },
  { text: '  console.log("Bootstrapping microservices...");', color: "text-white/70" },
  { text: "  const cluster = new EnterpriseCluster({", color: "text-accent-gold" },
  { text: "    nodes: 100,", color: "text-accent-green" },
  { text: '    region: "global-edge",', color: "text-accent-green" },
  { text: "    autoScaling: true,", color: "text-accent-green" },
  { text: "  });", color: "text-accent-gold" },
  { text: "", color: "" },
  { text: '  cluster.on("ready", async () => {', color: "text-white" },
  { text: "    const ai = new AIProcessor({", color: "text-accent-gold" },
  { text: '      model: "gpt-enterprise-v2",', color: "text-accent-green" },
  { text: "      concurrency: 1000", color: "text-accent-green" },
  { text: "    });", color: "text-accent-gold" },
  { text: "", color: "" },
  { text: "    await ai.startStream();", color: "text-white" },
  { text: '    console.log("AI pipeline ready. Awaiting data.");', color: "text-white/70" },
  { text: "  });", color: "text-white" },
  { text: "}", color: "text-white" },
  { text: "", color: "" },
  { text: "export const runtime = initializeSystem({", color: "text-brand-highlight" },
  { text: '  env: "production",', color: "text-accent-green" },
  { text: "  secure: true", color: "text-accent-green" },
  { text: "});", color: "text-brand-highlight" },
];

export function CodeScroll() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[400px] lg:h-full bg-[#0a1120] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col font-mono text-sm leading-relaxed">
      {/* Fake Window Header */}
      <div className="h-12 bg-[#101c33] border-b border-white/5 w-full flex items-center px-4 gap-2 z-10 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-4 text-xs text-white/40 tracking-wider">manya-core-deployment.ts</span>
      </div>

      {/* Code Area with Fade Masks */}
      <div className="relative flex-1 overflow-hidden" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}>
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="absolute top-0 left-0 w-full flex flex-col pt-4"
        >
          {/* First Block */}
          <div className="w-full flex flex-col pb-8">
            {codeLines.map((line, i) => (
              <div key={`a-${i}`} className="flex px-6 whitespace-pre">
                <span className="w-8 shrink-0 text-white/20 select-none">{i + 1}</span>
                <span className={line.color}>{line.text}</span>
              </div>
            ))}
          </div>

          {/* Second Block (Duplicate for seamless loop) */}
          <div className="w-full flex flex-col pb-8">
            {codeLines.map((line, i) => (
              <div key={`b-${i}`} className="flex px-6 whitespace-pre">
                <span className="w-8 shrink-0 text-white/20 select-none">{codeLines.length + i + 1}</span>
                <span className={line.color}>{line.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
