
import React, { useState, useEffect } from 'react';
import { Language, Theme } from '../types';
import { TRANSLATIONS, SOCIAL_LINKS } from '../constants';

interface HomeContentProps {
  lang: Language;
  theme: Theme;
}

const HomeContent: React.FC<HomeContentProps> = ({ lang, theme }) => {
  const t = TRANSLATIONS[lang];
  const [time, setTime] = useState(new Date());
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatHijri = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA-u-ca-islamic-uma-nu-latn', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactIcons = [
    { id: 'fb', icon: 'fa-brands fa-facebook', color: 'bg-[#1877F2]', link: SOCIAL_LINKS.facebook },
    { id: 'ig', icon: 'fa-brands fa-instagram', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', link: null },
    { id: 'tg', icon: 'fa-brands fa-telegram', color: 'bg-[#0088cc]', link: null },
    { id: 'wa', icon: 'fa-brands fa-whatsapp', color: 'bg-[#25D366]', link: SOCIAL_LINKS.whatsapp },
    { id: 'em', icon: 'fa-solid fa-at', color: 'bg-[#EA4335]', link: 'email_trigger' }
  ];

  if (showEmail) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-8 animate-fade-in px-4">
        <button 
          onClick={() => setShowEmail(false)}
          className="group flex items-center gap-3 text-cyan-600 dark:text-cyan-400 font-bold transition-all"
        >
          <i className={`fas ${lang === 'ar' ? 'fa-arrow-right' : 'fa-arrow-left'} group-hover:px-2 transition-all`}></i>
          <span>{lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
        </button>

        <div className="bg-white dark:bg-slate-800 p-10 md:p-16 rounded-[3rem] shadow-2xl text-center border-b-8 border-cyan-500 w-full max-w-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="w-24 h-24 bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <i className="fa-solid fa-envelope-circle-check text-4xl"></i>
          </div>

          <h2 className="text-2xl md:text-4xl font-black mb-6 break-all tracking-tight text-slate-800 dark:text-white">
            {SOCIAL_LINKS.email}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={copyToClipboard}
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200'}`}
            >
              <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              {copied ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ البريد' : 'Copy Email')}
            </button>
            
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 text-white rounded-2xl font-bold hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <i className="fas fa-paper-plane"></i>
              {lang === 'ar' ? 'إرسال رسالة' : 'Send Message'}
            </a>
          </div>

          <p className="mt-8 text-slate-400 text-sm font-medium">
            {lang === 'ar' ? 'تواصل معي في أي وقت، سأقوم بالرد عليك قريباً' : 'Feel free to reach out anytime, I will get back to you soon.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      {/* Minimized & Sleek Dashboard - New Color Theme */}
      <div className="overflow-hidden bg-slate-950 rounded-[2rem] shadow-2xl border border-cyan-500/20 ring-1 ring-cyan-500/10">
        <div className="flex flex-col md:flex-row">
          
          {/* Spiritual Content - Deep Oceanic Gradient */}
          <div className="flex-grow p-6 md:p-8 bg-gradient-to-br from-cyan-900 via-blue-950 to-slate-950 text-white flex flex-col justify-center relative min-h-[160px]">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <i className="fas fa-mosque text-8xl -rotate-12"></i>
            </div>
            
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl md:text-3xl font-tajawal font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-emerald-200">
                {t.quranVerse}
              </h2>
              <div className="flex gap-3 text-xs md:text-sm">
                <span className="px-3 py-1 bg-cyan-500/10 backdrop-blur-sm rounded-lg border border-cyan-500/20 text-cyan-300">
                  {t.alhamdulillah}
                </span>
                <span className="px-3 py-1 bg-emerald-500/10 backdrop-blur-sm rounded-lg border border-emerald-500/20 text-emerald-300">
                  {t.allahuAkbar}
                </span>
              </div>
            </div>
          </div>

          {/* Temporal Content - Dark Glass */}
          <div className="md:w-[320px] p-6 flex flex-col justify-between bg-slate-900/60 backdrop-blur-2xl border-t md:border-t-0 md:border-l border-cyan-500/10">
            {/* Clock */}
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-1">Current Session</span>
              <div className="text-4xl md:text-5xl font-mono font-black tabular-nums text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                {time.toLocaleTimeString(lang === 'ar' ? 'ar-DZ' : 'en-US')}
              </div>
            </div>

            {/* Dates Row - Minimal */}
            <div className="mt-6 flex justify-between gap-4 border-t border-cyan-500/10 pt-4">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{t.birthDateLabel}</span>
                <p className="text-sm font-bold text-slate-300">2002 / 01 / 01</p>
              </div>
              <div className="space-y-0.5 text-right">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{t.hijriDateLabel}</span>
                <p className="text-xs font-bold text-cyan-400">{formatHijri(new Date(2002, 0, 1))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Contact - Refined Cyan Theme */}
      <section className="bg-white/5 dark:bg-slate-800/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-cyan-500/10 text-center">
        <div className="inline-block mb-10 group">
          <h3 className="text-2xl md:text-3xl font-black relative px-4">
            {t.contactMe}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {contactIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.link === 'email_trigger') setShowEmail(true);
                else if (item.link) window.open(item.link, '_blank');
              }}
              className={`${item.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-3 hover:rotate-[360deg] transition-all duration-700 active:scale-90 group relative ring-4 ring-transparent hover:ring-white/20`}
            >
              <i className={`${item.icon} transition-transform`}></i>
              {!item.link && item.link !== 'email_trigger' && (
                <div className="absolute -top-1 -right-1 bg-black text-[7px] px-1.5 py-0.5 rounded-full text-white font-black uppercase tracking-widest border border-white/20 shadow-lg">OFF</div>
              )}
            </button>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default HomeContent;
