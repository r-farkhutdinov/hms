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
    name: "Login",
    path: "/login",
    component: Login,
    layout: EmptyLayout
  },
  {
    name: "Choose Hotel",
    path: "/chooseHotel",
    component: ChooseHotel,
    layout: EmptyLayout
  },
  {
    name: "Hotels",
    path: "/hotels",
    component: Hotels,
    layout: HeaderSiderLayout
  },
  {
    name: "Logout",
    path: "/logout",
    component: Logout,
    layout: HeaderSiderLayout
  },
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
    layout: HeaderSiderLayout
  }
];
