import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locale/en/translation.json";
import translationAR from "./locale/ar/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
