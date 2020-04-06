import { HotelsModel } from "./hotels.model";
import { HotelsActions } from "./hotels.actions";
import { Instance } from "mobx-state-tree";

export const HotelsStore = HotelsModel.actions(HotelsActions);

const hotelJSON = localStorage.getItem("hotel");
const selectedHotel = hotelJSON ? JSON.parse(hotelJSON) : undefined;
const selectedHotelId = selectedHotel ? selectedHotel.id : undefined;

export const createHotelsStore = () =>
  HotelsStore.create({
    loading: false,
    hotelDetailsLoading: false,
    selectedHotel,
    selectedHotelId
  });

export type IHotelsModel = Instance<typeof HotelsModel>;
export type IHotelsStore = Instance<typeof HotelsStore>;
