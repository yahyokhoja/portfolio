import React from "react";
import { useTranslation } from "react-i18next";

const FoodDelivery: React.FC = () => {
  const { t } = useTranslation();

  const handleInvestClick = () => {
    alert(t("alert.invest", { project: t("startup_items.food_title") }));
  };

  return (
    <div className="container py-5">
      {/* Заголовок */}
      <h2>🚀 {t("startup_items.food_title")}</h2>

      {/* О проекте */}
      <h3 className="mt-4">{t("project.sections.about")}</h3>
      <p>{t("project.food_about_text") || "MVP для местных ресторанов: оплата, заказы и доставка."}</p>

      {/* Возможности инвестирования */}
      <h3 className="mt-4">{t("project.sections.invest")}</h3>
      <p>{t("project.food_invest_text") || "Вы можете инвестировать в проект для расширения функционала и масштабирования."}</p>
      <button className="btn btn-primary mb-4" onClick={handleInvestClick}>
        {t("project.invest_button") || "Связаться для инвестирования"}
      </button>

      {/* Бизнес-план */}
      <h3 className="mt-4">{t("project.sections.business_plan")}</h3>
      <ul>
        <li>{t("project.food_plan.research") || "Исследование рынка и анализ конкурентов"}</li>
        <li>{t("project.food_plan.development") || "Разработка MVP и тестирование"}</li>
        <li>{t("project.food_plan.partnerships") || "Налаживание партнерств с ресторанами"}</li>
        <li>{t("project.food_plan.marketing") || "Маркетинговая стратегия и продвижение"}</li>
        <li>{t("project.food_plan.scaling") || "Масштабирование на новые регионы"}</li>
      </ul>

      {/* Дедлайны */}
      <h3 className="mt-4">{t("project.sections.deadlines")}</h3>
      <ul>
        <li>{t("project.food_deadlines.mvp") || "MVP готов: Q2 2025"}</li>
        <li>{t("project.food_deadlines.launch") || "Запуск приложения: Q3 2025"}</li>
        <li>{t("project.food_deadlines.expansion") || "Расширение сервиса: Q1 2026"}</li>
      </ul>
    </div>
  );
};

export default FoodDelivery;
