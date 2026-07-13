import { describe, it, expect } from "vitest";
import {
  translate,
  detectLanguage,
  isRTL,
  languageOptions,
  translations,
  DEFAULT_LANGUAGE,
} from "../src/i18n";

const REQUIRED_KEYS = [
  "languageName",
  "title",
  "darkMode",
  "lightMode",
  "apply",
  "clear",
  "copy",
  "copied",
  "placeholder",
  "charCount",
  "languageLabel",
  "versionLabel",
  "doubleRotation",
  "learnMore",
  "madeWith",
  "coffeePrompt",
  "coffee",
  "openSource",
  "alternatively",
];

describe("i18n", () => {
  it("bundles at least 25 languages including en, zh-CN and zh-TW", () => {
    expect(Object.keys(translations).length).toBeGreaterThanOrEqual(25);
    expect(translations.en).toBeDefined();
    expect(translations["zh-CN"]).toBeDefined();
    expect(translations["zh-TW"]).toBeDefined();
  });

  it("defines every required UI key for every language", () => {
    for (const code of Object.keys(translations)) {
      for (const key of REQUIRED_KEYS) {
        expect(translations[code][key], `${code}.${key}`).toBeTruthy();
      }
    }
  });

  it("returns the value for the requested language", () => {
    expect(translate("es", "clear")).toBe("🧹 Limpiar");
  });

  it("falls back to English when a key is missing in a language", () => {
    // 'description' is only authored for a subset of languages.
    expect(translate("sv", "description")).toBe(translations.en.description);
  });

  it("falls back to the key itself when it is missing everywhere", () => {
    expect(translate("en", "does-not-exist")).toBe("does-not-exist");
  });

  it("detects right-to-left languages", () => {
    expect(isRTL("ar")).toBe(true);
    expect(isRTL("he")).toBe(true);
    expect(isRTL("fa")).toBe(true);
    expect(isRTL("en")).toBe(false);
  });

  it("honors a saved language", () => {
    expect(detectLanguage("fr", "en-US")).toBe("fr");
  });

  it("ignores an unsupported saved language", () => {
    expect(detectLanguage("xx", "de-DE")).toBe("de");
  });

  it("matches an exact navigator language", () => {
    expect(detectLanguage(null, "zh-TW")).toBe("zh-TW");
  });

  it("matches the short navigator code", () => {
    expect(detectLanguage(null, "de-DE")).toBe("de");
  });

  it("matches a regional variant from a short code", () => {
    expect(detectLanguage(null, "zh")).toMatch(/^zh-/);
  });

  it("falls back to the default language", () => {
    expect(detectLanguage(null, "xx-YY")).toBe(DEFAULT_LANGUAGE);
    expect(detectLanguage(undefined, undefined)).toBe(DEFAULT_LANGUAGE);
  });

  it("exposes language options sorted by display name", () => {
    const names = languageOptions.map((option) => option.name);
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
    expect(languageOptions.length).toBe(Object.keys(translations).length);
  });
});
