import { mockHotels } from "./../../../services/hotels/mock";
import { HotelsModelType } from "./hotels.model";
import { flow } from "mobx-state-tree";
import { message } from "antd";

export const HotelsActions = (self: HotelsModelType) => {
  const loadHotels = flow(function*(userId: number) {
    try {
      self.loading = true;
      const hotels = yield mockHotels(userId);
      self.hotels = hotels;
      self.loading = false;
    } catch (err) {
      message.error(err);
    }
  });

  const selectHotel = function(hotelId: number, history: any) {
    self.hotel = hotelId;
    history.push("/");
  };

  return {
    loadHotels,
    selectHotel
  };
};
