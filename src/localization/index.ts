import i18next from "i18next";

import en from "./locales/en/en.json";
import sv from "./locales/sv/sv.json";
import { initReactI18next } from "react-i18next";

export type SupportedLanguage = "en" | "sv";

export const supportedLngs: SupportedLanguage[] = ["en", "sv"];
export const defaultNS = "translation";

export const resources = {
  en: { [defaultNS]: en },
  sv: { [defaultNS]: sv },
} as const;

export const i18n = i18next;

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    supportedLngs,
    ns: [defaultNS],
    defaultNS,
    initImmediate: false,
    resources,
  });
