import { users } from "./users_mock";

type MockUser = {
  id: number;
  username: string;
  name: string;
  role: {
    id: number;
    title: string;
  };
};

export const mockAuth = (
  username: string,
  password: string
): Promise<MockUser> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const user = users.find(
        user => user.username === username && user.password === password
      );
      return !!user
        ? resolve({
            id: user.id,
            name: user.name,
            username: user.username,
            role: user.role
          })
        : reject("Incorrect username or password");
    }, 1000)
  );
