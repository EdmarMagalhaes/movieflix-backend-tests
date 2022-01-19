import { api, TOKEN } from "./request";
import queryString from "query-string";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

interface AuthProps {
  username: string;
  password: string;
}

type LoginResponse = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  userName: string;
  userId: number;
};

export type authority = "ROLE_VISITOR" | "ROLE_MEMBER";

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: authority[];
};

export async function login(userInfo: AuthProps) {
  const data = queryString.stringify({ ...userInfo, grant_type: "password" });
  const result = await api.post("oauth/token", data, {
    headers: {
      Authorization: TOKEN,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const { access_token } = result.data;
    setAsyncKeys("@token", access_token);
  return result;
}

async function setAsyncKeys(key: string, value: string) {
  try {
      await AsyncStorage.setItem(key, value);
  } catch (e) {
      console.warn(e);
  }
}

export async function getSessionData() {
  const sessionData = (await AsyncStorage.getItem("@token")) || "{}";
  return sessionData;
}

export async function getAccessTokenDecoded() {
  const sessionData = await getSessionData();

  try {
    const tokenDecoded = jwtDecode(sessionData);
        return tokenDecoded as AccessToken;
  } catch (error) {
        return {} as AccessToken;
  }
}
export async function isAllowedByRole(routeRoles: authority[] = []) {
  const { authorities } = await getAccessTokenDecoded();

  return routeRoles.some((role) => authorities?.includes(role));
}


export async function isAuthenticated() {
  try {
    const token = await AsyncStorage.getItem("@token");

      return token ? true : false;
  } catch (e) {
      console.warn(e);
  }
}

export async function doLogout() {
  try {
      AsyncStorage.removeItem("@token");
  } catch (e) {
      console.warn(e);
  }
}
