import { ls } from "../../../core/ls_utils";
import { AuthModel } from "./auth.model";
import { AuthActions } from "./auth.actions";
import { Instance } from "mobx-state-tree";

export const AuthStore = AuthModel.actions(AuthActions);

const userJSON = ls.get.user();
const tokenJSON = ls.get.token();
const user = userJSON ? JSON.parse(userJSON) : undefined;
const token = tokenJSON;

export const createAuthStore = () =>
  AuthStore.create({
    user,
    isAuthorized: !!user && !!token,
    loading: false
  });

export type IAuthModel = Instance<typeof AuthModel>;
export type IAuthStore = Instance<typeof AuthStore>;
