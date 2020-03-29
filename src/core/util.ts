import React from "react";
import { RootStore } from "./store";

export const useStore = () => {
  const store = React.useContext(RootStore);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
