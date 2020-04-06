import * as React from "react";
import { useStore } from "../../core/util";
import useRouter from "use-react-router";
import { Helmet } from "react-helmet";
import { matchRoute } from "../../modules/util/routeMatcher";
import { Login } from "../../modules/Authorization/components/Login";
import { Switch, Route } from "react-router";
import { routes } from "../../modules/routes";

export const MainLayout: React.FC = props => {
  const { authorization } = useStore();
  const { location } = useRouter();

  const { isAuthorized } = authorization;

  return (
    <>
      <Helmet>
        <title>HMS | {matchRoute(location.pathname, isAuthorized)}</title>
      </Helmet>
      {!isAuthorized ? (
        <Login />
      ) : (
        <Switch>
          {routes.map((r, key) => (
            <Route key={key} path={r.path}>
              <r.layout>
                <r.component />
              </r.layout>
            </Route>
          ))}
        </Switch>
      )}
    </>
  );
};
