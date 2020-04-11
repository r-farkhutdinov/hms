import {
  BookingsStore,
  createBookingsStore
} from "./../modules/Bookings/store";
import { I18nStore, createI18nStore } from "../i18n/store";
import { GuestsStore, createGuestsStore } from "./../modules/Guests/store";
import { types, Instance } from "mobx-state-tree";
import { createContext } from "react";
import { AuthStore, createAuthStore } from "../modules/Authorization/store";
import { HotelsStore, createHotelsStore } from "../modules/Hotels/store";

const RootStoreModel = types.model({
  authorization: types.late(() => AuthStore),
  hotels: types.late(() => HotelsStore),
  guests: types.late(() => GuestsStore),
  i18n: types.late(() => I18nStore),
  bookings: types.late(() => BookingsStore)
});

export const RootStore = createContext({
  authorization: createAuthStore(),
  hotels: createHotelsStore(),
  guests: createGuestsStore(),
  i18n: createI18nStore(),
  bookings: createBookingsStore()
});

export type IRootStore = Instance<typeof RootStoreModel>;
