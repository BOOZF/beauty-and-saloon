"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`text-sm font-medium transition-colors ${
          language === "en"
            ? "text-amber-600"
            : "text-neutral-400 hover:text-neutral-600"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-neutral-300">|</span>
      <button
        onClick={() => setLanguage("cn")}
        className={`text-sm font-medium transition-colors ${
          language === "cn"
            ? "text-amber-600"
            : "text-neutral-400 hover:text-neutral-600"
        }`}
        aria-label="Switch to Chinese"
      >
        CN
      </button>
    </div>
  );
}
