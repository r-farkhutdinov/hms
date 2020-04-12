import { menuItems } from "./../HeaderSiderLayout/menu";
import { matchPath } from "react-router";

export const matchRouteMenu = (path: string): number => {
  const menuItem = menuItems.find(
    item => matchPath(path, item.route) || item.route === path
  );

  return menuItem ? menuItem.id : 0;
};
