import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// About
import enAbout from '../locales/en/about.json';
import idAbout from '../locales/id/about.json';

// Hero
import enHero from '../locales/en/hero.json';
import idHero from '../locales/id/hero.json';

//  Project
import enProjects from '../locales/en/projects.json';
import idProjects from '../locales/id/projects.json';

import enEducationExperience from '../locales/en/education-experience.json';
import idEducationExperience from '../locales/id/education-experience.json';

const resources = {
  en: {
    about: enAbout,
    hero: enHero,
    projects: enProjects,
    'education-experience': enEducationExperience,
  },
  id: {
    about: idAbout,
    hero: idHero,
    projects: idProjects,
    'education-experience': idEducationExperience,
  },
};

i18n
  .use(LanguageDetector) // Mendeteksi bahasa dari browser/user
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['about', 'navbar', 'hero', 'projects', 'education-experience'],
    interpolation: {
      escapeValue: false, // React sudah auto-escape
    },
  });

export default i18n;
