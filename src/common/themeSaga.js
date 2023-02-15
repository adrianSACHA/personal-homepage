import { call, select, takeLatest } from "@redux-saga/core/effects";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";

function* changeThemeSaga() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(changeThemeSaga, isDarkTheme);
}

export function* themeSaga() {
  yield takeLatest(toggleTheme.type, changeThemeSaga);
}
