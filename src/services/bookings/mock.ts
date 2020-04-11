import { BookingModelType } from "../../modules/Bookings/store/bookings.model";
import { bookingsList } from "./bookgins_mock";
import dayjs from "dayjs";

export const mockBookings = (
  cin: string,
  cout: string,
  hotel: number
): Promise<BookingModelType[]> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const bookings = bookingsList.filter(
        b =>
          (dayjs(b.cinDate).isAfter(cin) || dayjs(b.coutDate).isBefore(cout)) &&
          b.hotel.id === hotel
      );

      return bookings && bookings.length
        ? resolve(bookings)
        : reject("No bookings");
    }, 1000)
  );
