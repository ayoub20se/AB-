
import React from 'react';
import { Language, Theme, View } from '../types';
import { TRANSLATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  currentView: View;
  setCurrentView: (v: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang, theme, toggleTheme, currentView, setCurrentView }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-opacity-80 border-b border-slate-200 dark:border-slate-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Top Left */}
          <div 
            onClick={() => setCurrentView('main')}
            className="cursor-pointer group flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
              A
            </div>
            <span className="text-2xl font-black tracking-tight dark:text-white">AYOUB</span>
          </div>

          {/* Controls - Top Right */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 mr-4">
               <button 
                onClick={() => setCurrentView('main')}
                className={`font-bold transition-colors ${currentView === 'main' ? 'text-blue-500' : 'text-slate-500 hover:text-blue-400'}`}
              >
                {t.home}
              </button>
              <button 
                onClick={() => setCurrentView('achievements')}
                className={`font-bold transition-colors ${currentView === 'achievements' ? 'text-blue-500' : 'text-slate-500 hover:text-blue-400'}`}
              >
                {t.achievements}
              </button>
            </nav>

            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                <i className="fas fa-language text-xl"></i>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-50">
                <button onClick={() => setLang('ar')} className="w-full p-2 text-sm text-center hover:bg-slate-100 dark:hover:bg-slate-700">العربية</button>
                <button onClick={() => setLang('en')} className="w-full p-2 text-sm text-center hover:bg-slate-100 dark:hover:bg-slate-700">English</button>
                <button onClick={() => setLang('fr')} className="w-full p-2 text-sm text-center hover:bg-slate-100 dark:hover:bg-slate-700">Français</button>
                <button onClick={() => setLang('tz')} className="w-full p-2 text-sm text-center hover:bg-slate-100 dark:hover:bg-slate-700">ⵜⴰⵎⴰⵣⵉⵖⵜ</button>
              </div>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun text-yellow-400"></i>}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 px-4 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-center">
        <p className="font-bold text-lg text-slate-500 dark:text-slate-400">
          {t.developedBy}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
