import { HotelDetailsModelType } from "./../../modules/Hotels/store/hotels.model";
import { hotels, hotelsDetails } from "./hotels_mock";

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

export const mockHotelDetails = (
  hotelId: number
): Promise<HotelDetailsModelType> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const hotel = hotelsDetails.find(h => h.id === hotelId);
      return hotel ? resolve(hotel) : reject("No hotels available found");
    }, 1000)
  );
