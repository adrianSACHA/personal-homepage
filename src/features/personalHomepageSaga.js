import { getRepositories } from "./personalHomepageAPI";
import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import {
  fetchRepos,
  fetchReposSuccess,
  fetchReposError,
} from "./personalHomepageSlice";

const loadingDelay = 2_000;

function* fetchReposHandler({ payload: username }) {
  try {
    yield delay(loadingDelay); // just to demo the loading
    const data = yield call(getRepositories, username);
    yield put(fetchReposSuccess(data));
  } catch (error) {
    yield put(fetchReposError());
  }
}
export function* reposSaga() {
  yield takeLatest(fetchRepos.type, fetchReposHandler);
}
