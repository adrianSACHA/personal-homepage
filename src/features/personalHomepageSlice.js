import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepos: () => ({
      repositories: null,
      status: "loading",
    }),
    fetchReposSuccess: (_, { payload: repositories }) => ({
      repositories,
      status: "success",
    }),
    fetchReposError: () => ({
      repositories: null,
      status: "error",
    }),
  },
});

export const {
  fetchRepos,
  fetchReposError,
  fetchReposSuccess,
} = personalHomepageSlice.actions;

const selectState = (state) => state.projects;

export const selectRepos = (state) => selectState(state).repositories;
export const selectReposStatus = (state) => selectState(state).status;

export default personalHomepageSlice.reducer;
