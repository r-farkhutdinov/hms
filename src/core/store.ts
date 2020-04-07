import { createGuestsStore } from "./../modules/Guests/store";
import { GuestsStore } from "./../modules/Guests/store";
import { types, Instance } from "mobx-state-tree";
import { createContext } from "react";
import { AuthStore, createAuthStore } from "../modules/Authorization/store";
import { HotelsStore, createHotelsStore } from "../modules/Hotels/store";

const RootStoreModel = types.model({
  authorization: types.late(() => AuthStore),
  hotels: types.late(() => HotelsStore),
  guests: types.late(() => GuestsStore)
});

export const RootStore = createContext({
  authorization: createAuthStore(),
  hotels: createHotelsStore(),
  guests: createGuestsStore()
});

export type IRootStore = Instance<typeof RootStoreModel>;
