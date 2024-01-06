import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  TRANSLATIONS,
  type Lang,
  type Page,
} from "@i18n/config"

/**
 * Obtiene el idioma por el pathname.
 * @param pathname
 */
export function getLangFromPathname(pathname: string) {
  const [, lang] = pathname.split("/")
  return lang as Lang
}

/**
 * Obtiene el idioma de la página actual por un objeto URL.
 * @param url
 */
export function getLanguageFromUrl(url: URL) {
  return getLangFromPathname(url.pathname)
}

/**
 * Configura la función `t` para el idioma indicado.
 * @param lang
 * @param defaultPage - Indica la página por defecto perteneciente al TRANSLATIONS y que debe estar en el idioma por defecto.
 * @returns Retorna la función `t`.
 */
export function useTranslations(lang: Lang, defaultPage?: Page) {
  /**
   * Devuelve el texto traducido en la página por defecto o en la especificada.
   * @param page - Especifica la página, e.g. `home`, `about`, etc. La clave es de un solo nivel, por tanto `home.title` no es válido.
   * @returns Retorna el texto traducido.
   */
  return function t(page?: Page): any {
    const lang$ = lang in LANGUAGES ? lang : DEFAULT_LANGUAGE
    const page$ = page ?? defaultPage

    return page$ ? TRANSLATIONS[lang$][page$] : ""
  }
}
