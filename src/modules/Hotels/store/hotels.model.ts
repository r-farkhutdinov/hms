import { types, Instance } from "mobx-state-tree";

// const Room = types.model({
//   id: types.number,
//   roomNumber: types.number
// });

// const RoomCategory = types.model({
//   id: types.number,
//   internalName: types.string,
//   publicName: types.string,
//   rooms: types.array(Room)
// });

export const HotelModel = types.model({
  id: types.number,
  name: types.string,
  location: types.string,
  ownerId: types.number
});

const HotelDetailsModel = types.model({
  id: types.number,
  name: types.string,
  location: types.string,
  ownerId: types.number,
  description: types.string
  // roomCategories: types.array(RoomCategory)
});

export const HotelsModel = types.model({
  selectedHotelId: types.maybe(types.number),
  selectedHotel: types.maybe(HotelModel),
  hotels: types.maybe(types.array(HotelModel)),
  loading: types.boolean,
  hotelDetails: types.maybe(HotelDetailsModel),
  hotelDetailsLoading: types.boolean
});

export type HotelsModelType = Instance<typeof HotelsModel>;
export type HotelModelType = Instance<typeof HotelModel>;
export type HotelDetailsModelType = Instance<typeof HotelDetailsModel>;
