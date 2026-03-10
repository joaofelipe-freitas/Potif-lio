import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Layers } from "lucide-react";

export default function SkillsDashboard() {
  const { skills } = portfolioData;

  // Custom tool-tip radar chart style
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-brand-surface border border-brand-neon/30 p-3 rounded-lg shadow-lg font-mono">
          <p className="text-brand-heading">{payload[0].payload.subject}</p>
          <p className="text-brand-neon">{`Proficiency: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto animate-in fade-in duration-500">
      
      <div className="flex items-center gap-3 mb-8">
        <Layers className="text-brand-cyan" size={28} />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Arsenal Tecnológico
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full h-full min-h-[400px]">
        
        {/* Radar Chart Panel */}
        <div className="w-full lg:w-1/2 bg-brand-surface border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center shadow-inner relative group">
          <div className="absolute inset-0 bg-brand-cyan/5 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
          <div className="w-full h-[300px] md:h-[350px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skills.radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Radar 
                  name="Arsenal" 
                  dataKey="A" 
                  stroke="#00ff9d" 
                  strokeWidth={2}
                  fill="#00ff9d" 
                  fillOpacity={0.2} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Categories Tags */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {skills.categories.map((cat, idx) => (
            <div key={idx} className="bg-[#0b111a] border border-[#1e293b] rounded-xl p-5">
              <h3 className="text-sm font-mono text-brand-text mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="text-brand-neon">#</span> {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, idy) => (
                  <span 
                    key={idy}
                    className="bg-brand-surface-light border border-white/10 px-3 py-1.5 rounded-md text-sm font-medium text-brand-heading hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
