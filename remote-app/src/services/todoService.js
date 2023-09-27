import { apiShell } from "webpackHost/apiService";

const todoApi = apiShell.injectEndpoints({
  endpoints: (build) => ({
    allTodos: build.query({
      query: (_limit = 20) => ({
        url: `/todos`,
        params: {
          _start: 0,
          _limit,
        },
      }),
    }),
  }),
  //   overrideExisting: false,
});

export const { useAllTodosQuery } = todoApi;
