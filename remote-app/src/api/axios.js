import axios from "axios";
import { getAuth } from "../utils/functions";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const auth = getAuth();

    if (auth) {
      config.headers["Authorization"] = `Bearer ${auth.access_token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
