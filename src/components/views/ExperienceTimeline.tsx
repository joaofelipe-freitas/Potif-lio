import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Clock, Activity } from "lucide-react";

export default function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-brand-neon" size={28} />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Experiência Profissional
        </h2>
      </div>

      <div className="relative border-l border-white/10 ml-4 lg:ml-6 pb-4">
        {experience.map((exp, idx) => (
          <div key={idx} className="mb-10 ml-8 md:ml-10 relative group">
            
            {/* Timeline Node */}
            <span className="absolute -left-[45px] md:-left-[49px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-surface ring-8 ring-[#0a0f14] border border-brand-neon group-hover:scale-125 group-hover:bg-brand-neon transition-all">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-neon group-hover:bg-brand-surface" />
            </span>

            {/* Content Container */}
            <div className="bg-brand-surface border border-white/5 p-6 rounded-2xl hover:border-brand-neon/30 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <h3 className="text-xl font-bold text-brand-heading flex items-center gap-2">
                  <Activity size={16} className="text-brand-cyan hidden sm:block" />
                  {exp.company}
                </h3>
                <time className="text-xs font-mono text-brand-neon bg-brand-neon/10 px-3 py-1 rounded-full border border-brand-neon/20 self-start sm:self-auto uppercase tracking-widest">
                  {exp.period}
                </time>
              </div>
              
              <h4 className="text-md font-semibold text-brand-text mb-4">
                {exp.role}
              </h4>
              
              <p className="text-brand-text/80 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
