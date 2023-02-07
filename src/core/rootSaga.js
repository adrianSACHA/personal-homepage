import { all } from "@redux-saga/core/effects";
import { reposSaga } from "../features/personalHomepage/Portfolio/reposSaga";

export default function* rootSaga() {
  yield all([reposSaga()]);
}
