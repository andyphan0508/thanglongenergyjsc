import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const STORAGE_KEY = "tl-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "vi";
  return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "vi";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const value = useMemo(
    () => ({
      lang,
      toggleLang: () =>
        setLang((prev) => {
          const next = prev === "vi" ? "en" : "vi";
          localStorage.setItem(STORAGE_KEY, next);
          return next;
        }),
      // Resolves a { vi, en } pair (or plain string) to the active language.
      t: (field) =>
        typeof field === "string" || field == null ? field : field[lang]
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
