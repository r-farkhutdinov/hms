import * as React from "react";
import { useStore } from "../../core/util";
import useRouter from "use-react-router";
import { routes } from "../routes";
import { Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { matchRoute } from "../util/routeMatcher";

export const Layout: React.FC = () => {
  const { authorization } = useStore();
  const { location } = useRouter();

  const { isAuthorized } = authorization;
  return (
    <>
      <Helmet>
        <title>HMS | {matchRoute(location.pathname)}</title>
      </Helmet>
      {!isAuthorized && location.pathname !== "/login" ? (
        <Redirect to="/login" />
      ) : (
        <Switch>{routes.map(route => route.route)}</Switch>
      )}
    </>
  );
};
