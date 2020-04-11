import { BookingsModel } from "./bookings.model";
import { BookingsActions } from "./bookings.actions";
import { Instance } from "mobx-state-tree";

export const BookingsStore = BookingsModel.actions(BookingsActions);

export const createAuthStore = () =>
  BookingsStore.create({
    bookings: [],
    loading: false
  });

export type IBookingsModel = Instance<typeof BookingsModel>;
export type IBookingsStore = Instance<typeof BookingsStore>;
