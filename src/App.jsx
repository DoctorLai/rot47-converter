import "./App.css";
import { rot47 } from "./functions";
import { translate, detectLanguage, isRTL, languageOptions } from "./i18n";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial value from localStorage
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // convert string to boolean
  });

  const [lang, setLang] = useState(() =>
    detectLanguage(localStorage.getItem("lang"), navigator.language),
  );

  const [text, setText] = useState("w6==@[ (@C=5P");
  const [copied, setCopied] = useState(false);
  const copiedResetTimeoutRef = useRef(null);

  // Translate a key using the currently selected language.
  const t = (key) => translate(lang, key);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    return () => {
      if (copiedResetTimeoutRef.current) {
        clearTimeout(copiedResetTimeoutRef.current);
      }
    };
  }, []);

  const handleTransform = () => {
    setText(rot47(text));
  };

  const clearText = () => {
    setText("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      if (copiedResetTimeoutRef.current) {
        clearTimeout(copiedResetTimeoutRef.current);
      }
      setCopied(true);
      copiedResetTimeoutRef.current = setTimeout(() => {
        setCopied(false);
        copiedResetTimeoutRef.current = null;
      }, 2000);
    } catch {
      // Clipboard API is unavailable (e.g. insecure context); ignore.
    }
  };

  // Insert two spaces on Tab; apply ROT47 on Ctrl/Cmd + Enter.
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Insert two spaces at the cursor position
      const newText =
        textarea.value.slice(0, start) + "  " + textarea.value.slice(end);

      setText(newText);

      // Move the cursor to the right after the inserted spaces
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      });
    } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleTransform();
    }
  };

  const appVersion = import.meta.env.VITE_APP_VERSION;
  const commitHash = import.meta.env.VITE_COMMIT_HASH;

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="toolbar">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? t("lightMode") : t("darkMode")}
        </button>
        <label className="language-select">
          {t("languageLabel")}{" "}
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            {languageOptions.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <h1>{t("title")}</h1>
        <textarea
          value={text}
          aria-label={t("title")}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("placeholder")}
        />
        <p className="char-count">
          {text.length} {t("charCount")}
        </p>
        <div>
          <button onClick={handleTransform}>{t("apply")}</button>
          <button onClick={handleCopy}>
            {copied ? t("copied") : t("copy")}
          </button>
          <button onClick={clearText}>{t("clear")}</button>
        </div>
      </div>

      <div className="description">
        <p>{t("description")}</p>
        <p>
          {t("doubleRotation")} <code>rot47(rot47(x)) = x</code>
        </p>
        <p>
          <a href="https://rot47.net" target="_blank" rel="noopener noreferrer">
            {t("learnMore")}
          </a>
        </p>
      </div>

      <footer>
        <div className="footer">
          <p>
            {t("madeWith")}{" "}
            <a
              href="https://github.com/doctorlai"
              target="_blank"
              rel="noopener noreferrer"
            >
              @justyy
            </a>
          </p>
          <p>
            {t("coffeePrompt")}{" "}
            <a
              href="https://www.buymeacoffee.com/y0BtG5R"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("coffee")}
            </a>{" "}
            ☕
          </p>
          <p>
            {t("openSource")}{" "}
            <a
              href="https://github.com/DoctorLai/rot47-converter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            {t("alternatively")}{" "}
            <a
              href="https://rot47.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ROT47 Cipher
            </a>
          </p>
          {appVersion && (
            <p className="version">
              {t("versionLabel")}: {appVersion}
              {commitHash ? ` (${commitHash})` : ""}
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}
