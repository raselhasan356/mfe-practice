import axios from "axios";

import { getAccessToken } from "remoteApp/remoteUtilityFunctions";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const access_token = await getAccessToken();
    console.log(access_token);

    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
