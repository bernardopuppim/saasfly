export const i18n = {
  defaultLocale: "br",
  locales: ["br"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// 新增的映射对象
export const localeMap = {
  pt: "Português"
} as const;
