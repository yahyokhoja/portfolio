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

          about_title: "Обо мне",
          about_text:
            "Я современный full-stack разработчик. Работаю с React, TypeScript, Django, Flask, FastAPI, Docker и PostgreSQL. Люблю создавать UI и анимации.",

          // --- Projects ---
          projects_title: "Мои проекты",
          projects_items: {
            delivery_title: "Приложение доставки еды",
            delivery_desc: "Django + React + PostgreSQL, управление заказами",
            ecommerce_title: "E-commerce",
            ecommerce_desc: "Интернет-магазин с корзиной и оплатой Stripe",
            bots_title: "Телеграм-боты",
            bots_desc: "Интеграция с Bybit API через Proxy",
          },

          // --- Startups ---
          startups_title: "🚀 Мои стартапы",
          view_project: "Смотреть проект",
          startup_items: {
            food_title: "Приложение доставки еды",
            food_desc: "MVP для местных ресторанов: оплата, заказы и доставка.",
            crypto_title: "Панель криптотрейдинга",
            crypto_desc: "Торговый интерфейс: API Bybit, ордера, графики, сигналы.",
            edu_title: "Платформа онлайн-обучения",
            edu_desc: "Видео-уроки, кабинет студента, квизы и домашние задания.",
            uav_title: "Завод по производству БПЛА",
            uav_desc:
              "Проект по созданию промышленного и коммерческого производства дронов с современными технологиями автоматизации и контроля качества.",
          },

          // --- Project sections for FoodDelivery ---
          project: {
            sections: {
              about: "О проекте",
              invest: "Возможности инвестирования",
              business_plan: "Бизнес-план",
              deadlines: "Дедлайны",
            },
            food_about_text: "MVP для местных ресторанов: оплата, заказы и доставка.",
            food_invest_text:
              "Вы можете инвестировать в проект, для дополнительной информации свяжитесь с нами.",
            invest_button: "Инвестировать",
            food_plan: {
              research: "Исследование рынка и конкурентов",
              development: "Разработка MVP",
              partnerships: "Поиск партнёров и поставщиков",
              marketing: "Маркетинговая стратегия",
              scaling: "Масштабирование и рост",
            },
            food_deadlines: {
              mvp: "MVP — через 3 месяца",
              launch: "Запуск — через 6 месяцев",
              expansion: "Расширение — через 12 месяцев",
            },

            // UAV sections
            uav_about_text:
              "Проект завода по производству промышленных и коммерческих дронов с автоматизацией и контролем качества.",
            uav_invest_text:
              "Вы можете инвестировать в проект завода БПЛА. Для дополнительной информации свяжитесь с нами.",
            uav_plan: {
              research: "Анализ рынка беспилотных технологий",
              development: "Создание производственных линий и прототипов",
              partnerships: "Заключение контрактов с поставщиками и партнёрами",
              marketing: "Продвижение продукции на рынке",
              scaling: "Расширение производства и выход на международный рынок",
            },
            uav_deadlines: {
              prototype: "Прототип — через 4 месяца",
              production: "Запуск производства — через 8 месяцев",
              scaling: "Масштабирование — через 14 месяцев",
            },
          },

          // --- Contact ---
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

          alert: {
            invest:
              'Вы можете инвестировать в проект "{{project}}". Для дополнительной информации свяжитесь с нами.',
          },
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

          // --- Projects ---
          projects_title: "My Projects",
          projects_items: {
            delivery_title: "Food Delivery App",
            delivery_desc: "Django + React + PostgreSQL, order management",
            ecommerce_title: "E-commerce",
            ecommerce_desc: "Online store with cart and Stripe payments",
            bots_title: "Telegram Bots",
            bots_desc: "Bybit API integration via Proxy",
          },

          // --- Startups ---
          startups_title: "🚀 My Startups",
          view_project: "View Project",
          startup_items: {
            food_title: "Food Delivery App",
            food_desc: "MVP for local restaurants with payments, orders, delivery.",
            crypto_title: "Crypto Trading Panel",
            crypto_desc: "Trading interface using Bybit API with orders, charts, signals.",
            edu_title: "Online Education Platform",
            edu_desc: "Video lessons, student dashboard, quizzes, homework system.",
            uav_title: "UAV Factory",
            uav_desc:
              "Project to build industrial and commercial drones factory with modern automation and quality control technologies.",
          },

          project: {
            sections: {
              about: "About the Project",
              invest: "Investment Opportunities",
              business_plan: "Business Plan",
              deadlines: "Deadlines",
            },
            food_about_text:
              "MVP for local restaurants with payments, orders, and delivery.",
            food_invest_text:
              "You can invest in the project. For more information, contact us.",
            invest_button: "Invest",
            food_plan: {
              research: "Market research and competitor analysis",
              development: "MVP development",
              partnerships: "Finding partners and suppliers",
              marketing: "Marketing strategy",
              scaling: "Scaling and growth",
            },
            food_deadlines: {
              mvp: "MVP — in 3 months",
              launch: "Launch — in 6 months",
              expansion: "Expansion — in 12 months",
            },

            uav_about_text:
              "Project to build industrial and commercial drones with automation and quality control.",
            uav_invest_text:
              "You can invest in the UAV Factory project. For more information, contact us.",
            uav_plan: {
              research: "Drone technology market analysis",
              development: "Production lines and prototype creation",
              partnerships: "Contracts with suppliers and partners",
              marketing: "Product promotion",
              scaling: "Scaling production and international market entry",
            },
            uav_deadlines: {
              prototype: "Prototype — in 4 months",
              production: "Production launch — in 8 months",
              scaling: "Scaling — in 14 months",
            },
          },

          // --- Contact ---
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

          alert: {
            invest:
              'You can invest in the project "{{project}}". For more information, contact us.',
          },
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

          // --- Projects ---
          projects_title: "Meine Projekte",
          projects_items: {
            delivery_title: "Lebensmittel-Lieferapp",
            delivery_desc: "Django + React + PostgreSQL, Bestellverwaltung",
            ecommerce_title: "E-Commerce",
            ecommerce_desc: "Online-Shop mit Warenkorb und Stripe-Zahlungen",
            bots_title: "Telegram-Bots",
            bots_desc: "Bybit API-Integration über Proxy",
          },

          // --- Startups ---
          startups_title: "🚀 Meine Startups",
          view_project: "Projekt ansehen",
          startup_items: {
            food_title: "Lebensmittel-Lieferapp",
            food_desc: "MVP für lokale Restaurants: Zahlungen, Bestellungen, Lieferung.",
            crypto_title: "Krypto-Trading-Panel",
            crypto_desc: "Handelsoberfläche mit Bybit-API: Orders, Charts, Signale.",
            edu_title: "Online-Lernplattform",
            edu_desc: "Videokurse, Dashboard, Quiz-Tests und Hausaufgaben.",
            uav_title: "Drohnenfabrik",
            uav_desc:
              "Projekt zur Errichtung einer industriellen und kommerziellen Drohnenfabrik mit moderner Automatisierung und Qualitätskontrolle.",
          },

          project: {
            sections: {
              about: "Über das Projekt",
              invest: "Investitionsmöglichkeiten",
              business_plan: "Businessplan",
              deadlines: "Deadlines",
            },
            food_about_text:
              "MVP für lokale Restaurants: Zahlungen, Bestellungen, Lieferung.",
            food_invest_text:
              "Sie können in das Projekt investieren. Für weitere Informationen kontaktieren Sie uns.",
            invest_button: "Investieren",
            food_plan: {
              research: "Marktforschung und Konkurrenzanalyse",
              development: "Entwicklung des MVP",
              partnerships: "Partner und Lieferanten finden",
              marketing: "Marketingstrategie",
              scaling: "Skalierung und Wachstum",
            },
            food_deadlines: {
              mvp: "MVP — in 3 Monaten",
              launch: "Start — in 6 Monaten",
              expansion: "Expansion — in 12 Monaten",
            },

            uav_about_text:
              "Projekt zur Herstellung industrieller und kommerzieller Drohnen mit Automatisierung und Qualitätskontrolle.",
            uav_invest_text:
              "Sie können in das UAV-Fabrikprojekt investieren. Für weitere Informationen kontaktieren Sie uns.",
            uav_plan: {
              research: "Analyse des Drohnentechnologiemarktes",
              development: "Produktionslinien und Prototypen erstellen",
              partnerships: "Verträge mit Lieferanten und Partnern",
              marketing: "Produktpromotion",
              scaling: "Produktion skalieren und internationale Märkte betreten",
            },
            uav_deadlines: {
              prototype: "Prototyp — in 4 Monaten",
              production: "Produktionsstart — in 8 Monaten",
              scaling: "Skalierung — in 14 Monaten",
            },
          },

          // --- Contact ---
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

          alert: {
            invest:
              'Sie können in das Projekt "{{project}}" investieren. Für weitere Informationen kontaktieren Sie uns.',
          },
        },
      },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
