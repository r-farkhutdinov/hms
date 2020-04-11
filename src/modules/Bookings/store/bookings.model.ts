import { HotelModel } from "../../Hotels/store/hotels.model";
import { types, Instance } from "mobx-state-tree";

export const Booking = types.model({
  id: types.number,
  cinDate: types.string,
  coutDate: types.string,
  totalPrice: types.number,
  room: types.number,
  earlyCin: types.boolean,
  hotel: HotelModel,
  guest: types.model({
    id: types.number,
    name: types.string
  })
});

export const BookingsModel = types.model({
  bookings: types.maybe(types.array(Booking)),
  loading: types.boolean
});

export type BookingsModelType = Instance<typeof BookingsModel>;
export type BookingModelType = Instance<typeof Booking>;
