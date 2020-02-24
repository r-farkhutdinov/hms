import * as React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { routes } from "./modules/routes";
import "./styles/main.css";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>{routes.map(route => route.route)}</Switch>
      </BrowserRouter>
    </>
  );
};
