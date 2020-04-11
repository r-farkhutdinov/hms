import { HotelModelType } from "../modules/Hotels/store/hotels.model";
import { UserModelType } from "../modules/Authorization/store/auth.model";

const clearLocalStorage = () => {
  localStorage.clear();
};

const setUser = (user: UserModelType) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

const setHotel = (hotel: HotelModelType) => {
  localStorage.setItem("hotel", JSON.stringify(hotel));
};

const getUser = () => localStorage.getItem("user");

const getHotel = () => localStorage.getItem("hotel");

const getToken = () => localStorage.getItem("token");

export const ls = {
  get: {
    user: getUser,
    hotel: getHotel,
    token: getToken
  },
  set: {
    user: setUser,
    hotel: setHotel,
    token: setToken
  },
  clear: clearLocalStorage
};
