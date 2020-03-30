import * as React from "react";
import { Route } from "react-router";

export const wrapComponent = (
  component: React.ReactNode,
  config: { path: string; exact?: boolean; key: number }
): React.ReactNode => <Route {...config} children={component}></Route>;
