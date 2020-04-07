import { guests, guestDetails } from "./guests_mock";
import {
  GuestReducedModelType,
  GuestModelType
} from "../../modules/Guests/store/guests.model";

export const mockGuests = (): Promise<GuestReducedModelType[]> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      return guests.length ? resolve(guests) : reject("No users");
    }, 1000)
  );

export const mockHotelDetails = (id: number): Promise<GuestModelType> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const guest = guestDetails.find(g => g.id === id);
      return guest ? resolve(guest) : reject("No users");
    }, 1000)
  );
