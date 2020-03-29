import { HotelsModel } from "./hotels.model";
import { HotelsActions } from "./hotels.actions";
import { Instance } from "mobx-state-tree";

export const HotelsStore = HotelsModel.actions(HotelsActions);

export const createHotelsStore = () =>
  HotelsStore.create({
    loading: false
  });

export type IHotelsModel = Instance<typeof HotelsModel>;
export type IHotelsStore = Instance<typeof HotelsStore>;
