import { all } from "@redux-saga/core/effects";
import { reposSaga } from "./features/Portfolio/reposSaga";

export default function* rootSaga() {
  yield all([reposSaga()]);
}
