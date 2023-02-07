import { takeEvery, put } from "redux-saga/effects";

function* changeThemeSaga() {
  yield takeEvery("isDarkMode", function* ({ theme }) {
    yield put({ type: "isDarkMode", theme });
  });
}

export default changeThemeSaga;
