export const i18n = {
  defaultLocale: "br",
  locales: ["br","en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// 新增的映射对象
export const localeMap = {
  en: "English",
  br: "Brazilian Portuguese",
} as const;
