import { types, Instance } from "mobx-state-tree";

const RolesModel = types.model({
  id: types.number,
  title: types.string
});

const UserModel = types.model({
  name: types.string,
  id: types.number,
  username: types.string,
  role: RolesModel
});

export const AuthModel = types.model({
  user: types.maybe(UserModel),
  isAuthorized: types.boolean,
  loading: types.boolean
});

export type AuthModelType = Instance<typeof AuthModel>;
