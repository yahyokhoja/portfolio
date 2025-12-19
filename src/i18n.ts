import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        title: "Моё портфолио",
        about: "Обо мне",
        projects: "Проекты",

        about_title: "Обо мне",
        about_text:
          "Я современный full-stack разработчик. Работаю с React, TypeScript, Django, Flask, FastAPI, Docker и PostgreSQL. Люблю создавать UI и анимации.",

        startups_title: "🚀 Мои стартапы",
        view_project: "Смотреть проект",

        startup_items: {
          food_title: "Приложение доставки еды",
          food_desc: "MVP для местных ресторанов: оплата, заказы и доставка.",
          crypto_title: "Панель криптотрейдинга",
          crypto_desc: "Торговый интерфейс: API Bybit, ордера, графики, сигналы.",
          edu_title: "Платформа онлайн-обучения",
          edu_desc: "Видео-уроки, кабинет студента, квизы и домашние задания.",
        },

        contact_title: "Связаться со мной",
        contact_success: "Сообщение успешно отправлено!",
        contact_error: "Ошибка отправки. Проверьте настройки.",
        contact_name: "Имя",
        contact_name_ph: "Ваше имя",
        contact_email: "Email",
        contact_email_ph: "Ваш email",
        contact_subject: "Тема",
        contact_subject_ph: "Укажите тему",
        contact_message: "Сообщение",
        contact_message_ph: "Ваше сообщение",
        contact_send: "Отправить сообщение",
      },
    },

    en: {
      translation: {
        title: "My Portfolio",
        about: "About me",
        projects: "Projects",

        about_title: "About Me",
        about_text:
          "I am a modern full-stack developer. I work with React, TypeScript, Django, Flask, FastAPI, Docker and PostgreSQL. I love building UI and animations.",

        startups_title: "🚀 My Startups",
        view_project: "View Project",

        startup_items: {
          food_title: "Food Delivery App",
          food_desc: "MVP for local restaurants with payments, orders and delivery.",
          crypto_title: "Crypto Trading Panel",
          crypto_desc: "Trading interface using Bybit API with orders, charts, signals.",
          edu_title: "Online Education Platform",
          edu_desc: "Video lessons, student dashboard, quizzes, homework system.",
        },

        contact_title: "Contact Me",
        contact_success: "Message sent successfully!",
        contact_error: "Failed to send message. Check settings.",
        contact_name: "Name",
        contact_name_ph: "Your Name",
        contact_email: "Email",
        contact_email_ph: "Your Email",
        contact_subject: "Subject",
        contact_subject_ph: "Your Subject",
        contact_message: "Message",
        contact_message_ph: "Your Message",
        contact_send: "Send Message",
      },
    },

    de: {
      translation: {
        title: "Mein Portfolio",
        about: "Über mich",
        projects: "Projekte",

        about_title: "Über mich",
        about_text:
          "Ich bin ein moderner Full-Stack-Entwickler. Ich arbeite mit React, TypeScript, Django, Flask, FastAPI, Docker und PostgreSQL. Ich liebe UI-Design und Animationen.",

        startups_title: "🚀 Meine Startups",
        view_project: "Projekt ansehen",

        startup_items: {
          food_title: "Lebensmittel-Lieferapp",
          food_desc: "MVP für lokale Restaurants: Zahlungen, Bestellungen, Lieferung.",
          crypto_title: "Krypto-Trading-Panel",
          crypto_desc: "Handelsoberfläche mit Bybit-API: Orders, Charts, Signale.",
          edu_title: "Online-Lernplattform",
          edu_desc: "Videokurse, Dashboard, Quiz-Tests und Hausaufgaben.",
        },

        contact_title: "Kontakt",
        contact_success: "Nachricht erfolgreich gesendet!",
        contact_error: "Fehler beim Senden. Einstellungen prüfen.",
        contact_name: "Name",
        contact_name_ph: "Ihr Name",
        contact_email: "Email",
        contact_email_ph: "Ihre E-Mail",
        contact_subject: "Betreff",
        contact_subject_ph: "Betreff eingeben",
        contact_message: "Nachricht",
        contact_message_ph: "Ihre Nachricht",
        contact_send: "Nachricht senden",
      },
    },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
