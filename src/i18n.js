import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationSV from "./locales/sv/translation.json";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "sv",
  fallbackLng: "sv",
  resources: {
    en: {
      translation: translationEN,
    },
    sv: {
      translation: translationSV,
    },
  },
});

export default i18n;
