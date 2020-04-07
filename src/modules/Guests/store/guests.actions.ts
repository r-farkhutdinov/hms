import { GuestsModelType } from "./guests.model";
import { flow } from "mobx-state-tree";
import { message } from "antd";

export const GuestsActions = (self: GuestsModelType) => {
  const loadGuests = flow(function*(userId: number) {
    try {
      self.loading = true;
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
