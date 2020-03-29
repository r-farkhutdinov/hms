import { Dashboard } from "./Dashboard";
import { ChooseHotel } from "./ChooseHotel";
import { wrapComponent } from "./util/routeWrapper";
import { Login } from "./Authorization/Login";

export const routes = [
  {
    name: "Login",
    route: wrapComponent(Login, { path: "/login", key: 0 }),
    path: "/login"
  },
  {
    name: "Choose Hotel",
    route: wrapComponent(ChooseHotel, { path: "/chooseHotel", key: 1 }),
    path: "/chooseHotel"
  },
  {
    name: "Dashboard",
    route: wrapComponent(Dashboard, { path: "/", key: 2 }),
    path: "/"
  }
];
