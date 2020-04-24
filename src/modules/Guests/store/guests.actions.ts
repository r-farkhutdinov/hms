import { mockGuests } from "./../../../services/guests/mock";
import { GuestsModelType } from "./guests.model";
import { flow } from "mobx-state-tree";
import { message } from "antd";

export const GuestsActions = (self: GuestsModelType) => {
  const loadGuests = flow(function*() {
    try {
      self.loading = true;
      const guests = yield mockGuests();
      self.guestsList = guests;
      self.loading = false;
    } catch (err) {
      message.error(err);
    }
  });

  const loadGuestDetails = flow(function*(hotelId: number) {
    try {
    } catch (err) {
      message.error(err);
    }
  });

  return {
    loadGuests,
    loadGuestDetails
  };
};
