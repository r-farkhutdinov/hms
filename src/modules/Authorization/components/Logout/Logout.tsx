import * as React from "react";
import { useStore } from "../../../../core/util";
import useRouter from "use-react-router";

export const Logout: React.FC = () => {
  const { authorization } = useStore();
  const { logout } = authorization;
  const { history } = useRouter();

  React.useEffect(() => {
    logout(history);
  }, []);

  return <></>;
};
