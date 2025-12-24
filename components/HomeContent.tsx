
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
          className="group flex items-center gap-3 text-slate-500 hover:text-violet-500 font-bold transition-all"
        >
          <i className={`fas ${lang === 'ar' ? 'fa-arrow-right' : 'fa-arrow-left'} group-hover:-translate-x-1 transition-transform`}></i>
          <span>{lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
        </button>

        <div className="bg-white dark:bg-slate-800 p-10 md:p-16 rounded-[3rem] shadow-2xl text-center border-b-8 border-red-500 w-full max-w-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <i className="fa-solid fa-envelope-circle-check text-4xl"></i>
          </div>

          <h2 className="text-2xl md:text-4xl font-black mb-6 break-all tracking-tight text-slate-800 dark:text-white">
            {SOCIAL_LINKS.email}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={copyToClipboard}
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
            >
              <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              {copied ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ البريد' : 'Copy Email')}
            </button>
            
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all"
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
      {/* Minimized & Sleek Dashboard */}
      <div className="overflow-hidden bg-slate-900 rounded-[2rem] shadow-2xl border border-white/5 ring-1 ring-white/10">
        <div className="flex flex-col md:flex-row">
          
          {/* Spiritual Content - Compact */}
          <div className="flex-grow p-6 md:p-8 bg-gradient-to-br from-violet-800 via-indigo-900 to-slate-900 text-white flex flex-col justify-center relative min-h-[160px]">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <i className="fas fa-star-and-crescent text-8xl"></i>
            </div>
            
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl md:text-3xl font-tajawal font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">
                {t.quranVerse}
              </h2>
              <div className="flex gap-3 text-xs md:text-sm">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-violet-200">
                  {t.alhamdulillah}
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-indigo-200">
                  {t.allahuAkbar}
                </span>
              </div>
            </div>
          </div>

          {/* Temporal Content - Minimized */}
          <div className="md:w-[320px] p-6 flex flex-col justify-between bg-slate-950/40 backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/10">
            {/* Clock */}
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-violet-400 uppercase tracking-[0.2em] mb-1">Live Time</span>
              <div className="text-4xl md:text-5xl font-mono font-black tabular-nums text-white">
                {time.toLocaleTimeString(lang === 'ar' ? 'ar-DZ' : 'en-US')}
              </div>
            </div>

            {/* Dates Row - Tighter */}
            <div className="mt-6 flex justify-between gap-4 border-t border-white/5 pt-4">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{t.birthDateLabel}</span>
                <p className="text-sm font-bold text-slate-300">2002 / 01 / 01</p>
              </div>
              <div className="space-y-0.5 text-right">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{t.hijriDateLabel}</span>
                <p className="text-xs font-bold text-indigo-400">{formatHijri(new Date(2002, 0, 1))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Contact - Refined */}
      <section className="bg-white/5 dark:bg-slate-800/20 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-slate-200/10 text-center">
        <div className="inline-block mb-10 group">
          <h3 className="text-2xl md:text-3xl font-black relative px-4">
            {t.contactMe}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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
              className={`${item.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:rotate-[360deg] transition-all duration-700 active:scale-90 group relative ring-4 ring-transparent hover:ring-white/20`}
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
