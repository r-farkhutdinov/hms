import { routes } from "../routes";

export const matchRoute = (route: string, isAuthorized: boolean): string =>
  isAuthorized ? routes.find(r => r.path === route).name : "Login";
