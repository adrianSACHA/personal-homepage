import { all } from "@redux-saga/core/effects";
import { reposSaga } from "../features/personalHomepage/Portfolio/reposSaga";
import { themeSaga } from "../common/themeSaga";

export default function* rootSaga() {
  yield all([reposSaga(), themeSaga()]);
}
