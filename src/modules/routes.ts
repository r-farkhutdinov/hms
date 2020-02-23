import { wrapComponent } from "./Authorization/util/routeWrapper";
import { Login } from "./Authorization/Login";

export const routes = [
  {
    id: 0,
    name: "Login",
    route: wrapComponent(Login, { path: "/login" })
  }
];
