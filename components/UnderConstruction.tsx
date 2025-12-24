
import React from 'react';
import { Language, Theme } from '../types';
import { TRANSLATIONS } from '../constants';

interface UnderConstructionProps {
  lang: Language;
  theme: Theme;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ lang, theme }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in px-4">
      {/* Site Logo */}
      <div className="mb-12">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-3xl flex items-center justify-center text-white font-black text-5xl shadow-2xl mx-auto mb-4">
          A
        </div>
        <h1 className="text-4xl font-black">AYOUB</h1>
      </div>

      <div className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] shadow-2xl max-w-2xl border-4 border-dashed border-blue-500/30">
        <img 
          src="https://picsum.photos/seed/building/600/300" 
          alt="Under Construction" 
          className="rounded-2xl mb-8 shadow-lg mx-auto grayscale hover:grayscale-0 transition-all duration-500"
        />
        <h2 className="text-3xl md:text-5xl font-black text-blue-600 mb-4">
          {t.underConstruction}
        </h2>
        <div className="flex gap-2 justify-center mt-6">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default UnderConstruction;
