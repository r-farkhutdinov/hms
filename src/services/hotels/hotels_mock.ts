import { HotelDetailsModelType } from "./../../modules/Hotels/store/hotels.model";
import { UserHotel } from "./mock";

export const hotels: UserHotel[] = [
  {
    id: 0,
    name: "Korston Club Hotel 5*",
    location: "Kazan, Russia",
    ownerId: 0
  },
  {
    id: 1,
    name: "Korston Hotel 5*",
    location: "Moscow, Russia",
    ownerId: 0
  },
  {
    id: 2,
    name: "Test Hotel 4*",
    location: "Kazan, Russia",
    ownerId: 0
  },
  {
    id: 3,
    name: "Ostrovsky Hostel",
    location: "Moscow, Russia",
    ownerId: 0
  }
];

export const hotelsDetails: HotelDetailsModelType[] = [
  {
    id: 0,
    name: "Korston Club Hotel 5*",
    location: "Kazan, Russia",
    ownerId: 0,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 1,
    name: "Korston Hotel 5*",
    location: "Moscow, Russia",
    ownerId: 0,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 2,
    name: "Test Hotel 4*",
    location: "Kazan, Russia",
    ownerId: 0,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 3,
    name: "Ostrovsky Hostel",
    location: "Moscow, Russia",
    ownerId: 0,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
];
