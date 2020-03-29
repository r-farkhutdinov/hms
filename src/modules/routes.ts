import { ChooseHotel } from "./ChooseHotel/ChooseHotel.component";
import { wrapComponent } from "./util/routeWrapper";
import { Login } from "./Authorization/Login";

export const routes = [
  {
    name: "Login",
    route: wrapComponent(Login, { path: "/login", key: 0 })
  },
  {
    name: "Choose Hotel",
    route: wrapComponent(ChooseHotel, { path: "/chooseHotel", key: 1 })
  }
];
