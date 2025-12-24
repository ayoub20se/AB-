
import React, { useState, useEffect } from 'react';
import { Language, Theme, View } from './types';
import SplashScreen from './components/SplashScreen';
import Layout from './components/Layout';
import HomeContent from './components/HomeContent';
import UnderConstruction from './components/UnderConstruction';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentView, setCurrentView] = useState<View>('main');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10000); // 10 seconds splash as requested

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500`}>
      <Layout 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme}
        currentView={currentView}
        setCurrentView={setCurrentView}
      >
        {currentView === 'main' ? (
          <HomeContent lang={lang} theme={theme} />
        ) : (
          <UnderConstruction lang={lang} theme={theme} />
        )}
      </Layout>
    </div>
  );
};

export default App;
