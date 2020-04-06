import { EmptyLayout } from "../layout/EmptyLayout/EmptyLayout..component";
import { Dashboard } from "./Dashboard";
import { ChooseHotel } from "./ChooseHotel";
import { wrapComponent } from "./util/routeWrapper";
import { Login } from "./Authorization/Login";
import { HeaderSiderLayout } from "../layout/HeaderSiderLayout";

export type RouteType = {
  name: string;
  route: React.ReactNode;
  path: string;
};

export const routes = [
  {
    name: "Login",
    route: wrapComponent(Login, { path: "/login", key: 0 }),
    path: "/login",
    component: Login,
    layout: EmptyLayout
  },
  {
    name: "Choose Hotel",
    route: wrapComponent(ChooseHotel, {
      path: "/chooseHotel",
      key: 1
    }),
    path: "/chooseHotel",
    component: ChooseHotel,
    layout: EmptyLayout
  },
  {
    name: "Dashboard",
    route: wrapComponent(Dashboard, { path: "/", key: 2 }),
    path: "/",
    component: Dashboard,
    layout: HeaderSiderLayout
  }
];
