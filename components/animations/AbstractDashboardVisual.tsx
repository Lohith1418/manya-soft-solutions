"use client";

import { motion } from "framer-motion";

export function AbstractDashboardVisual() {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#0a1120] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center p-8">
      {/* Abstract Background Pattern (Simulating Circuit/Data) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent pointer-events-none" />

      {/* Floating Glass Panels */}
      <div className="relative w-full max-w-[280px] h-[240px] flex items-center justify-center gap-4">
        
        {/* Left Panel */}
        <motion.div 
          animate={{ y: ["-3%", "3%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatType: "reverse" }}
          className="w-1/2 h-[80%] bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-end gap-3 shadow-2xl relative z-10"
        >
          <div className="w-8 h-8 rounded-full bg-[#00AEEF] shadow-[0_0_15px_rgba(0,174,239,0.5)]" />
          <div className="w-3/4 h-2 rounded-full bg-white/20" />
        </motion.div>

        {/* Right Panel */}
        <motion.div 
          animate={{ y: ["3%", "-3%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatType: "reverse" }}
          className="w-1/2 h-[95%] bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-end gap-3 shadow-2xl relative z-10 mt-8"
        >
          <div className="w-8 h-8 rounded-full bg-[#34D399] shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
          <div className="w-2/3 h-2 rounded-full bg-white/20" />
        </motion.div>

      </div>
    </div>
  );
}
