import * as React from "react";
import { Route } from "react-router";

export const wrapComponent = (
  component: React.FC,
  config: { path: string; exact?: boolean; key: number }
): React.ReactNode => <Route component={component} {...config} />;
