import { AuthModelType } from "./auth.model";
import { flow } from "mobx-state-tree";
import { message } from "antd";
import auth from "../../../services/auth";

export const AuthActions = (self: AuthModelType) => {
  const login = flow(function*(
    username: string,
    password: string,
    history: any
  ) {
    try {
      self.loading = true;
      const authData = yield auth.mockAuth(username, password);
      self.user = authData;
      self.loading = false;
      history.push("/chooseHotel");
    } catch (err) {
      message.error(err);
    }
  });

  return {
    login
  };
};
