import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, ShieldCheck } from "lucide-react";

export default function CertificationsGrid() {
  const { education, certifications } = portfolioData;

  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-top-4 duration-500">
      
      {/* Education Section */}
      <section>
        <div className="flex items-center gap-3 mb-6 text-brand-cyan">
          <GraduationCap size={28} />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Formação Acadêmica
          </h2>
        </div>
        
        <div className="bg-[linear-gradient(135deg,#0f172a_0%,#000000_100%)] border border-brand-cyan/20 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-full bg-brand-cyan/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-start gap-1">
            <h3 className="text-xl md:text-2xl font-bold text-brand-heading">
              {education.degree}
            </h3>
            <p className="text-brand-text flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              {education.institution}
            </p>
          </div>
          
          <div className="relative z-10 font-mono flex flex-col items-start md:items-end">
            <span className="text-xs text-brand-text/60 uppercase">Previsão de Conclusão</span>
            <span className="text-brand-cyan font-bold block bg-brand-cyan/10 px-3 py-1 rounded-md mt-1 border border-brand-cyan/30">
              {education.completion}
            </span>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center gap-3 mb-6 text-brand-neon">
          <ShieldCheck size={28} />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Certificações & Cursos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="bg-brand-surface border border-white/5 px-6 py-5 rounded-xl hover:border-brand-neon/40 hover:-translate-y-1 transition-all duration-300 flex justify-between items-center group cursor-default"
            >
              <h4 className="text-base font-semibold text-brand-heading max-w-[80%] pr-4 group-hover:text-white transition-colors">
                {cert.name}
              </h4>
              <div className="text-brand-text/50 font-mono text-sm group-hover:text-brand-neon transition-colors">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
