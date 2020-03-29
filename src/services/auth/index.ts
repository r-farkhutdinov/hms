import { mockAuth } from "./mock";
import axios from "axios";

const url = "/api/login";

type AuthParams = {
  username: string;
  password: string;
};

async function login(params: AuthParams) {
  const { data } = await axios.post(url, { params });

  return data;
}

export default {
  login,
  mockAuth
};
