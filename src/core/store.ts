import { types, Instance } from "mobx-state-tree";
import { createContext } from "react";
import { AuthStore, createAuthStore } from "../modules/Authorization/store";
import { HotelsStore, createHotelsStore } from "../modules/ChooseHotel/store";

const RootStoreModel = types.model({
  authorization: types.late(() => AuthStore),
  hotels: types.late(() => HotelsStore)
});

export const RootStore = createContext({
  authorization: createAuthStore(),
  hotels: createHotelsStore()
});

export type IRootStore = Instance<typeof RootStoreModel>;

export type ILocalStores = Instance<typeof RootStoreModel>;
