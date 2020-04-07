import { GuestsModel } from "./guests.model";
import { GuestsActions } from "./guests.actions";
import { Instance } from "mobx-state-tree";

export const GuestsStore = GuestsModel.actions(GuestsActions);

export const createGuestsStore = () =>
  GuestsStore.create({
    loading: false
  });

export type IGuestsModel = Instance<typeof GuestsModel>;
export type IGuestsStore = Instance<typeof GuestsStore>;
