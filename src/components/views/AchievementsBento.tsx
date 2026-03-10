import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Target, Award, Play } from "lucide-react";

export default function AchievementsBento() {
  const { achievements } = portfolioData;
  const primary = achievements.find(a => a.isPrimary);
  const secondaries = achievements.filter(a => !a.isPrimary);

  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="text-yellow-400" size={28} />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Highlight & Achievements
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* Primary Card */}
        {primary && (
          <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-[#0f172a] to-blue-900/40 p-6 md:p-8 rounded-2xl border border-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <Award size={14} /> Global Winner
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {primary.title}
                </h3>
                <p className="text-lg text-blue-200/80">
                  {primary.description}
                </p>
              </div>
              
              <div className="mt-8 flex justify-end opacity-50 font-mono text-sm group-hover:opacity-100 transition-opacity">
                {">"} System.println("Success_Rate: 100%");
              </div>
            </div>
          </div>
        )}

        {/* Secondary Cards */}
        {secondaries.map((achievement, idx) => (
          <div 
            key={idx}
            className="bg-brand-surface border border-white/5 p-6 rounded-2xl flex flex-col justify-between group hover:border-brand-text/30 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-surface-light flex items-center justify-center mb-4 text-brand-neon">
                {idx === 0 ? <Target size={20} /> : <Play size={20} />}
              </div>
              <h4 className="text-lg font-bold text-brand-heading mb-2 leading-snug">
                {achievement.title}
              </h4>
              <p className="text-sm text-brand-text/80 line-clamp-3">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
