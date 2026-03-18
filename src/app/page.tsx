"use client";

import React, { useEffect } from "react";
import Terminal from "@/components/Terminal";
import Navigation from "@/components/Navigation";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { motion, AnimatePresence } from "framer-motion";

// View imports (to be created)
import HeroSection from "@/components/views/HeroSection";
import AchievementsBento from "@/components/views/AchievementsBento";
import SkillsDashboard from "@/components/views/SkillsDashboard";
import ExperienceTimeline from "@/components/views/ExperienceTimeline";
import CertificationsGrid from "@/components/views/CertificationsGrid";

export default function Home() {
  const activeView = usePortfolioStore((state) => state.activeView);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch on initial render

  const renderView = () => {
    switch (activeView) {
      case "hero":
        return <HeroSection key="hero" />;
      case "achievements":
        return <AchievementsBento key="achievements" />;
      case "skills":
        return <SkillsDashboard key="skills" />;
      case "experience":
        return <ExperienceTimeline key="experience" />;
      case "certifications":
        return <CertificationsGrid key="certifications" />;
      default:
        return <HeroSection key="hero" />;
    }
  };

  return (
    <main className="flex flex-col lg:flex-row w-full min-h-screen lg:h-full bg-cover relative bg-brand-bg overflow-x-hidden">
      {/* Background Decorators to mimic Enterprise Dashboard */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-neon blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-cyan blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-bg to-brand-bg" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Main Layout Container */}
      <div className="flex flex-col lg:flex-row w-full h-full z-10 p-2 md:p-6 lg:p-8 gap-4 lg:gap-8 max-w-[1920px] mx-auto">
        
        {/* Left Side: Navigation & GUI Content */}
        <div className="flex flex-col w-full lg:w-[60%] xl:w-[65%] lg:h-full gap-6">
          <Navigation />
          
          <div className="flex-1 glass-panel rounded-2xl p-6 lg:p-10 lg:overflow-y-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Terminal CLI */}
        <div className="w-full lg:w-[40%] xl:w-[35%] h-[40vh] lg:h-full shrink-0">
          <Terminal />
        </div>
      </div>
    </main>
  );
}
