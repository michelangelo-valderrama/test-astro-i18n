import es from "@public/locales/es.json"
import en from "@public/locales/en.json"
import fr from "@public/locales/fr.json"

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

export const TRANSLATIONS = { es, en, fr }

export type Lang = keyof typeof TRANSLATIONS
export type Page = keyof (typeof TRANSLATIONS)[typeof DEFAULT_LANGUAGE]
