import { EditGuest } from "./Guests/Edit";
import { Bookings } from "./Bookings";
import { Guests } from "./Guests";
import { NotFound } from "./NotFound";
import { HotelSettings } from "./Hotels/Settings";
import { Hotels } from "./Hotels";
import { Logout } from "./Authorization/components/Logout";
import { EmptyLayout } from "../layout/EmptyLayout";
import { Dashboard } from "./Dashboard";
import { ChooseHotel } from "./ChooseHotel";
import { Login } from "./Authorization/components/Login";
import { HeaderSiderLayout } from "../layout/HeaderSiderLayout";

export type RouteType = {
  name: string;
  route: React.ReactNode;
  path: string;
};

export const routes = [
  {
    name: "login",
    path: "/login",
    component: Login,
    layout: EmptyLayout
  },
  {
    name: "chooseHotel",
    path: "/chooseHotel",
    component: ChooseHotel,
    layout: EmptyLayout
  },
  {
    name: "hotels",
    path: "/hotels",
    component: Hotels,
    layout: HeaderSiderLayout
  },
  {
    name: "hotelSettings",
    path: "/hotels/:id",
    component: HotelSettings,
    layout: HeaderSiderLayout
  },
  {
    name: "logout",
    path: "/logout",
    component: Logout,
    layout: HeaderSiderLayout
  },
  {
    name: "guests",
    path: "/guests/:id/",
    component: EditGuest,
    layout: HeaderSiderLayout
  },
  {
    name: "guests",
    path: "/guests",
    component: Guests,
    layout: HeaderSiderLayout
  },
  {
    name: "bookings",
    path: "/bookings",
    component: Bookings,
    layout: HeaderSiderLayout
  },
  // Last matches. All routes have to be added above
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    layout: HeaderSiderLayout
  },
  {
    name: "noMatch",
    path: "*",
    component: NotFound,
    layout: HeaderSiderLayout
  }
];
