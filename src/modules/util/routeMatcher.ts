import { routes } from "../routes";

export const matchRoute = (route: string): string =>
  routes.find(r => r.path === route).name;
