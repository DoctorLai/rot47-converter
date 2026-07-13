// Lightweight i18n for the ROT47 converter.
// Each language lives in ./lang/<code>.json and is bundled at build time.

const modules = import.meta.glob("./lang/*.json", { eager: true });

/** Map of language code -> translation dictionary. */
export const translations = {};
for (const path in modules) {
  const match = path.match(/\/([\w-]+)\.json$/);
  if (match) {
    translations[match[1]] = modules[path].default ?? modules[path];
  }
}

/** Languages written right-to-left. */
export const RTL_LANGUAGES = ["ar", "fa", "he"];

/** Fallback language used when a key or language is missing. */
export const DEFAULT_LANGUAGE = "en";

/** Ordered list of { code, name } for the language selector. */
export const languageOptions = Object.keys(translations)
  .map((code) => ({ code, name: translations[code].languageName || code }))
  .sort((a, b) => a.name.localeCompare(b.name));

/** Whether a language should be rendered right-to-left. */
export function isRTL(lang) {
  return RTL_LANGUAGES.includes(lang);
}

/** Translate a key, falling back to English and then the key itself. */
export function translate(lang, key) {
  return (
    translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? key
  );
}

/**
 * Resolve the best supported language from a previously saved value or the
 * browser's preferred language. Falls back to English.
 */
export function detectLanguage(saved, navigatorLanguage) {
  if (saved && translations[saved]) return saved;
  const nav = navigatorLanguage || "";
  if (translations[nav]) return nav;
  const short = nav.split("-")[0];
  if (short && translations[short]) return short;
  const regional = Object.keys(translations).find(
    (code) => code.split("-")[0] === short,
  );
  return regional || DEFAULT_LANGUAGE;
}
