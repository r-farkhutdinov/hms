import { AuthModel } from "./auth.model";
import { AuthActions } from "./auth.actions";
import { Instance } from "mobx-state-tree";

export const AuthStore = AuthModel.actions(AuthActions);

// const userJSON = localStorage.getItem("user");
// const tokenJSON = localStorage.getItem("token");
// console.log(userJSON);
const user = undefined;
const token = undefined;

export const createAuthStore = () =>
  AuthStore.create({
    user,
    isAuthorized: !!user && !!token,
    loading: false
  });

export type IAuthModel = Instance<typeof AuthModel>;
export type IAuthStore = Instance<typeof AuthStore>;
