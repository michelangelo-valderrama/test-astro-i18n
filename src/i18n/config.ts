import esTrans from "../../public/locales/es/translations.json"
import enTrans from "../../public/locales/en/translations.json"
import frTrans from "../../public/locales/fr/translations.json"

export const LANGUAGES = {
  en: "English",
  es: "Español",
  fr: "Français",
}

export const LOCALES = {
  en: "en-GB",
  es: "es-ES",
  fr: "fr-FR",
}

export const LANGUAGES_ARRAY = Object.keys(LANGUAGES)

export const DEFAULT_LANGUAGE = "en"

export const TRANSLATIONS = {
  es: esTrans,
  en: enTrans,
  fr: frTrans,
}

export type Lang = keyof typeof TRANSLATIONS
export type Page = keyof (typeof TRANSLATIONS)[typeof DEFAULT_LANGUAGE]
