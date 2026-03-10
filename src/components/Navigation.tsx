import React from "react";
import { User, Award, Shield, Briefcase, FileCode } from "lucide-react";
import { usePortfolioStore, ViewType } from "@/store/usePortfolioStore";

const navItems: { id: ViewType; label: string; icon: React.ReactNode; cmd: string }[] = [
  { id: "hero", label: "Perfil", icon: <User size={18} />, cmd: "whoami" },
  { id: "achievements", label: "Conquistas", icon: <Award size={18} />, cmd: "cat achievements.txt" },
  { id: "skills", label: "Arsenal", icon: <Shield size={18} />, cmd: "analyze skills" },
  { id: "experience", label: "Experiência", icon: <Briefcase size={18} />, cmd: "ls ./experience" },
  { id: "certifications", label: "Formação", icon: <FileCode size={18} />, cmd: "cat roadmap.sh" }
];

export default function Navigation() {
  const activeView = usePortfolioStore((state) => state.activeView);
  const setTypingCommand = usePortfolioStore((state) => state.setTypingCommand);

  const handleNavClick = (cmd: string) => {
    // When clicking a tab, send the command to the terminal so it "types" it out.
    setTypingCommand(cmd);
  };

  return (
    <nav className="glass-panel w-full rounded-2xl p-2 lg:p-4 shrink-0 shadow-lg border-b border-white/5 relative overflow-hidden">
      {/* Dynamic line indicator at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-neon to-transparent opacity-20" />
      
      <div className="flex flex-row justify-between items-center gap-1 overflow-x-auto scroller-hide">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.cmd)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 relative group min-w-max outline-none
                ${isActive ? 'text-brand-neon bg-brand-neon/10' : 'text-brand-text hover:text-white hover:bg-white/5'}
              `}
            >
              {/* Active Item Background Glow */}
              {isActive && (
                <div className="absolute inset-0 bg-brand-neon/5 rounded-lg border border-brand-neon/20 shadow-[0_0_15px_rgba(0,255,157,0.1)] pointer-events-none" />
              )}
              
              <span className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              <span className="relative z-10 hidden sm:inline-block tracking-wide">
                {item.label}
              </span>
              
              <span className="lg:hidden ml-1 opacity-50 text-xs font-mono hidden sm:inline-block">
                [{item.cmd.split(" ")[0]}]
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
