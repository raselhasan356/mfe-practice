import { apiShell } from "store/apiService";

const userApi = apiShell.injectEndpoints({
  endpoints: (build) => ({
    allUser: build.query({
      query: () => "/posts",
    }),
  }),
  //   overrideExisting: false,
});

export const { useAllUserQuery } = userApi;
