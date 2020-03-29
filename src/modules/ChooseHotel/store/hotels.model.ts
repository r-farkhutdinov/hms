import { types, Instance } from "mobx-state-tree";

const HotelModel = types.model({
  id: types.number,
  name: types.string,
  location: types.string,
  ownerId: types.number
});

export const HotelsModel = types.model({
  hotel: types.maybe(types.number),
  hotels: types.maybe(types.array(HotelModel)),
  loading: types.boolean
});

export type HotelsModelType = Instance<typeof HotelsModel>;
