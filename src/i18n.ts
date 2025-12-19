import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "ru";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          title: "Моё портфолио",
          about: "Обо мне",
          projects: "Проекты",
          
        },
      },
      en: {
        translation: {
          title: "My Portfolio",
          about: "About me",
          projects: "Projects",
        },
      },
      de: {
        translation: {
          title: "Mein Portfolio",
          about: "Über mich",
          projects: "Projekte",
        },
      },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
