import React from "react";
import { useTranslation } from "react-i18next";

const BankingStartup: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h2>🏦 Digital Banking Platform</h2>

      <h4 className="mt-4">{t("project.sections.about")}</h4>
      <p>
        Цифровой банк с онлайн-счетами, переводами, картами и аналитикой расходов.
      </p>

      <h4 className="mt-4">{t("project.sections.business_plan")}</h4>
      <ul>
        <li>Лицензирование и юр. структура</li>
        <li>Разработка мобильного банка</li>
        <li>Интеграция платежей</li>
        <li>Запуск для малого бизнеса</li>
      </ul>

      <button className="btn btn-primary mt-3">
        {t("project.invest_button")}
      </button>
    </div>
  );
};

export default BankingStartup;
