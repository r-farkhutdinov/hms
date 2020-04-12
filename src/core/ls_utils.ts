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

const setLocale = (locale: string) => {
  localStorage.setItem("locale", locale);
};

const getUser = () => localStorage.getItem("user");

const getHotel = () => localStorage.getItem("hotel");

const getToken = () => localStorage.getItem("token");

const getLocale = () => localStorage.getItem("locale");

export const ls = {
  get: {
    user: getUser,
    hotel: getHotel,
    token: getToken,
    locale: getLocale
  },
  set: {
    user: setUser,
    hotel: setHotel,
    token: setToken,
    locale: setLocale
  },
  clear: clearLocalStorage
};
