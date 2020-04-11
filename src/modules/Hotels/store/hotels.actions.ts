import { mockHotels, mockHotelDetails } from "../../../services/hotels/mock";
import { HotelsModelType } from "./hotels.model";
import { flow } from "mobx-state-tree";
import { message } from "antd";
import { toJS } from "mobx";
import { ls } from "../../../core/ls_utils";

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

  const loadHotelDetails = flow(function*(hotelId: number) {
    try {
      self.hotelDetailsLoading = true;
      const hotel = yield mockHotelDetails(hotelId);
      self.hotelDetails = hotel;
      self.hotelDetailsLoading = false;
    } catch (err) {
      message.error(err);
    }
  });

  const selectHotel = (hotelId: number, history: any) => {
    self.selectedHotelId = hotelId;
    self.selectedHotel = toJS(self.hotels).find(h => h.id === hotelId);
    ls.set.hotel(self.selectedHotel);
    history.push("/");
  };

  return {
    loadHotels,
    selectHotel,
    loadHotelDetails
  };
};
