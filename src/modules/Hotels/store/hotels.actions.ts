import { mockHotels } from "../../../services/hotels/mock";
import { HotelsModelType } from "./hotels.model";
import { flow } from "mobx-state-tree";
import { message } from "antd";
import { toJS } from "mobx";

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
    self.selectedHotelId = hotelId;
    self.selectedHotel = toJS(self.hotels).find(h => h.id === hotelId);
    localStorage.setItem("hotel", JSON.stringify(self.selectedHotel));
    history.goBack();
  };

  return {
    loadHotels,
    selectHotel
  };
};
