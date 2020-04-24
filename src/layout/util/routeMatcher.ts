import { routes } from "../../modules/routes";
import { matchPath } from "react-router";

export const matchRoute = (route: string, isAuthorized: boolean): string => {
  if (isAuthorized) {
    if (
      matchPath(
        route,
        routes.map(r => r.path)
      )
    ) {
      const result = routes.find(
        r => r.path === route || matchPath(route, r.path)
      );

      return (result && result.name) || "noMatch";
    } else {
      return "Not found";
    }
  } else {
    return "Login";
  }
};
