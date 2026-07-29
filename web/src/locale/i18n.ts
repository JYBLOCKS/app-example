import i18n from "i18next";
import { initReactI18next } from "react-i18next";
/* ----------------------EN---------------------------- */
import enHome from "./en/home.json";
import enLogin from "./en/login.json";
import enNotFound from "./en/notFound.json";
/* ----------------------ES---------------------------- */
import esHome from "./es/home.json";
import esLogin from "./es/login.json";
import esNotFound from "./es/notFound.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enHome,
        ...enLogin,
        ...enNotFound,
      },
    },
    es: {
      translation: {
        ...esHome,
        ...esLogin,
        ...esNotFound,
      },
    },
  },
  lng:
    typeof window !== "undefined" &&
    window.localStorage.getItem("school-assist.language") === "es"
      ? "es"
      : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
