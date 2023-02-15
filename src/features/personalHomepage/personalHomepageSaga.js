import { getProjects } from "./Portfolio/api";
import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import {
  fetchRepos,
  fetchReposSuccess,
  fetchReposError,
} from "./personalHomepageSlice";

function* fetchReposHandler() {
  try {
    yield delay(2000);
    const data = yield call(getProjects);
    yield put(fetchReposSuccess(data));
  } catch (error) {
    yield put(fetchReposError());
  }
}
export function* reposSaga() {
  yield takeLatest(fetchRepos, fetchReposHandler);
}
