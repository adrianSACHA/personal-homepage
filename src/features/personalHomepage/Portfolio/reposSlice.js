import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
  name: "projects",
initialState: {
  status: "loading",
  projects: []
},
reducers: {
  fetchRepos: (state) => {
    state.status = "loading";
  },
  fetchReposSuccess: (state, {payload: projects}) => {
    state.status = "success";
    state.projects = projects;
  },
  fetchReposError: (state) => {
    state.status = "error";
  },
},
});

export const {
  fetchRepos,
  fetchReposError,
  fetchReposSuccess,
} = reposSlice.actions;

const selectState = (state) => state.projects;

export const selectRepos = state => selectState(state).projects;
export const selectReposStatus = state => selectState(state).status;

export default reposSlice.reducer;
