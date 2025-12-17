import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang: "ru" | "en" | "de") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button onClick={() => changeLang("ru")}>🇷🇺 RU</button>
      <button onClick={() => changeLang("en")}>🇬🇧 EN</button>
      <button onClick={() => changeLang("de")}>🇩🇪 DE</button>
    </div>
  );
};

export default LanguageSwitcher;
