import { AuthStore, createAuthStore } from "./../modules/Authorization/store";
import { types, Instance } from "mobx-state-tree";
import { createContext } from "react";

const RootStoreModel = types.model({
  authorization: types.late(() => AuthStore)
});

export const RootStore = createContext({
  authorization: createAuthStore()
});

export type IRootStore = Instance<typeof RootStoreModel>;

export type ILocalStores = Instance<typeof RootStoreModel>;
