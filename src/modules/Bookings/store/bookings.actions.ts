import { mockBookings } from "../../../services/bookings/mock";
import { BookingsModelType } from "./bookings.model";
import { flow } from "mobx-state-tree";
import { message } from "antd";

export const BookingsActions = (self: BookingsModelType) => {
  const load = flow(function*(cin: string, cout: string, hotel: number) {
    try {
      self.loading = true;
      const bookings = yield mockBookings(cin, cout, hotel);
      self.bookings = bookings;
      self.loading = false;
    } catch (err) {
      message.error(err);
    }
  });
  return { load };
};
