
export type Language = 'ar' | 'en' | 'fr' | 'tz';

export interface Translation {
  welcome: string;
  home: string;
  achievements: string;
  contactMe: string;
  developedBy: string;
  underConstruction: string;
  alhamdulillah: string;
  allahuAkbar: string;
  quranVerse: string;
  birthDateLabel: string;
  hijriDateLabel: string;
}

export type Theme = 'light' | 'dark';

export type View = 'home' | 'achievements' | 'main';
