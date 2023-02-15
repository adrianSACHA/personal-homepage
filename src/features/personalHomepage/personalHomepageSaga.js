import { getProjects } from "./personalHomepageAPI";
import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import {
  fetchRepos,
  fetchReposSuccess,
  fetchReposError,
} from "./personalHomepageSlice";

const loadingDelay = 2_000

function* fetchReposHandler() {
  try {
    yield delay(loadingDelay); // just to demo the loading
    const data = yield call(getProjects);
    yield put(fetchReposSuccess(data));
  } catch (error) {
    yield put(fetchReposError());
  }
}
export function* reposSaga() {
  yield takeLatest(fetchRepos, fetchReposHandler);
}
