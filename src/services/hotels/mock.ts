import { hotels } from "./hotels_mock";

export type UserHotel = {
  id: number;
  name: string;
  location: string;
  ownerId: number;
};

export const mockHotels = (userId: number): Promise<UserHotel[]> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const userHotels = hotels.filter(h => h.ownerId === userId);
      return userHotels.length
        ? resolve(userHotels)
        : reject("No hotels available found");
    }, 1000)
  );
