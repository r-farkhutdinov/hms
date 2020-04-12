import { ls } from "../../core/ls_utils";
import { I18nModelType } from "./";

export const I18nActions = (self: I18nModelType) => {
  const setLocale = (locale: "ru" | "en") => {
    self.loading = true;
    self.locale = locale;
    ls.set.locale(locale);
    self.loading = false;
  };

  return {
    setLocale
  };
};
