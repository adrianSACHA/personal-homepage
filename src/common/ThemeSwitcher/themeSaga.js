import { takeEvery, put } from "redux-saga/effects";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";

function* changeThemeSaga() {
  yield takeEvery(isDarkMode, function* ({ theme }) {
    yield put({ type: isDarkMode, theme });
  });
}

export default changeThemeSaga;
