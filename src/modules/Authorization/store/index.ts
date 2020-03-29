import { AuthModel } from "./auth.model";
import { AuthActions } from "./auth.actions";
import { Instance } from "mobx-state-tree";

export const AuthStore = AuthModel.actions(AuthActions);

const userJSON = localStorage.getItem("user");
const tokenJSON = localStorage.getItem("token");
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
