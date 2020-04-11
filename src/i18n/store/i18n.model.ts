import { types } from "mobx-state-tree";

export const I18nModel = types.model({
  locale: types.string,
  loading: types.boolean
});
