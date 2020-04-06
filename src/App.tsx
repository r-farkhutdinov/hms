import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import { MainLayout } from "./layout/MainLayout";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};
