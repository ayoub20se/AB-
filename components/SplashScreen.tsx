
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          AYOUB
        </h1>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm"></div>
      </div>
      
      <div className="mt-12 space-y-4 text-center">
        <p className="text-3xl md:text-4xl font-bold animate-bounce text-cyan-100">
          مرحباً بك
        </p>
        <p className="text-2xl md:text-3xl font-light tracking-widest text-blue-100 opacity-80">
          WELCOME
        </p>
      </div>

      <div className="mt-24 w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-[loading_10s_linear]"></div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
