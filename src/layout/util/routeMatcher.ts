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
      const result = routes.find(r => r.path === route);

      return (result && result.name) || "No Match";
    } else {
      return "Not found";
    }
  } else {
    return "Login";
  }
};
