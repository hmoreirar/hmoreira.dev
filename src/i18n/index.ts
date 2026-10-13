import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export { defaultLang, langMeta, languages, type Lang, type UIKey } from "./ui";

/** Idioma detectado desde la ruta. `/` → es, `/en/...` → en. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "en" ? "en" : defaultLang;
}

/** Traductor curried para un idioma concreto. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/**
 * Misma página en el otro idioma. Se usa en el toggle de idioma y en hreflang.
 * `/` ↔ `/en/`, `/cv` ↔ `/en/cv`.
 */
export function translatePath(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/$/, "") || "/";
  const withoutLang = clean.replace(/^\/en(?=\/|$)/, "") || "/";

  if (target === defaultLang) return withoutLang;
  return withoutLang === "/" ? "/en/" : `/en${withoutLang}`;
}

/** URL absoluta de un path, respetando el dominio configurado. */
export function absoluteUrl(pathname: string, site: URL): string {
  return new URL(pathname, site).toString();
}
