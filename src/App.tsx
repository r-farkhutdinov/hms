import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import { Layout } from "./modules/Layout";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};
