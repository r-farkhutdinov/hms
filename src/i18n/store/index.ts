import { ls } from "./../../core/ls_utils";
import { I18nModel } from "./i18n.model";
import { I18nActions } from "./i18n.actions";
import { Instance } from "mobx-state-tree";

export const I18nStore = I18nModel.actions(I18nActions);

const locale: string = ls.get.locale();

export const createI18nStore = () =>
  I18nStore.create({
    locale: locale || "en",
    loading: false
  });

export type I18nModelType = Instance<typeof I18nModel>;
export type I18nStore = Instance<typeof I18nStore>;
