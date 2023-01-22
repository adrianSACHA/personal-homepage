import { getProjects } from "./api";
import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { fetchRepos, fetchReposSuccess, fetchReposError } from "./reposSlice";

function* fetchReposHandler() {
  try {
    yield delay(500);
    const data = yield call(getProjects);
    yield put(fetchReposSuccess(data));
  } catch (error) {
    yield put(fetchReposError());
  }
}
export function* reposSaga() {
  yield takeLatest(fetchRepos, fetchReposHandler);
}
