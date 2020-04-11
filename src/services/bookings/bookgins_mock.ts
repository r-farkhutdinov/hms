import { BookingModelType } from "../../modules/Bookings/store/bookings.model";

export const bookingsList: BookingModelType[] = [
  {
    id: 0,
    cinDate: "2020-04-14",
    coutDate: "2020-04-20",
    hotel: {
      id: 0,
      name: "Korston Club Hotel 5*",
      location: "Kazan, Russia",
      ownerId: 0
    },
    earlyCin: false,
    guest: {
      id: 0,
      name: "Nikolay Matyashov"
    },
    totalPrice: 12000,
    room: 10
  },
  {
    id: 1,
    cinDate: "2020-04-10",
    coutDate: "2020-04-18",
    hotel: {
      id: 0,
      name: "Korston Club Hotel 5*",
      location: "Kazan, Russia",
      ownerId: 0
    },
    earlyCin: false,
    guest: {
      id: 1,
      name: "Taimuraz Tolparov"
    },
    totalPrice: 12000,
    room: 8
  }
];
