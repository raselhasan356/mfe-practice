import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import axios from "../api/axios";

import { REFRESH_TOKEN_URL } from "./constants";

export function getAuth() {
  const auth = Cookies.get("auth");
  if (auth) {
    return JSON.parse(auth);
  }
  return null;
}

export function setAuth(obj) {
  //console.log(obj);
  Cookies.set("auth", JSON.stringify(obj));
}

export function removeAuth() {
  return Cookies.remove("auth");
}

async function getNewAccessToken(refresh_token) {
  try {
    const new_access_token = axios.get(REFRESH_TOKEN_URL, { refresh_token });
    //console.log("new access token:", new_access_token);
    return new_access_token;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getAccessToken() {
  const auth = getAuth();
  //console.log("auth from get access token function:", auth);
  if (auth) {
    //console.log("auth from getaccesstoken function");
    let decoded_access_token;
    try {
      decoded_access_token = jwt_decode(auth.access_token);
    } catch (err) {
      console.log("token decode error:", err);
    }

    let currentDate = new Date();
    if (decoded_access_token.exp * 1000 < currentDate.getTime()) {
      const new_access_token = await getNewAccessToken(auth.refresh_token);
      console.log("new token", new_access_token);
      if (new_access_token) {
        setAuth({
          access_token: new_access_token,
          refresh_token: auth.refresh_token,
        });
        return new_access_token;
      }
      return null;
    }
    return auth.access_token;
  }
  return null;
}

export async function isAuthenticated() {
  const access_token = await getAccessToken();
  if (access_token) {
    return true;
  }
  return false;
}

export function add(a, b) {
  return a + b;
}
