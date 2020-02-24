import { wrapComponent } from "./util/routeWrapper";
import { Login } from "./Authorization/Login";

export const routes = [
  {
    name: "Login",
    route: wrapComponent(Login, { path: "/login", key: 0 })
  }
];
