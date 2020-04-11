import { I18nModelType } from "./";

export const I18nActions = (self: I18nModelType) => {
  const setLocale = (locale: string) => {
    self.locale = locale;
  };

  return {
    setLocale
  };
};
