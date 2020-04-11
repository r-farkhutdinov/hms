import { types, Instance } from "mobx-state-tree";

export const Booking = types.model({
  cinDate: types.number,
  coutDate: types.number,
  totalProce: types.number,
  room: types.number,
  earlyCin: types.boolean,
  guest: types.model({
    name: types.string
  })
});

export const BookingsModel = types.model({
  bookings: types.maybe(types.array(Booking)),
  loading: types.boolean
});

export type BookingsModelType = Instance<typeof BookingsModel>;
export type BookingModelType = Instance<typeof Booking>;
