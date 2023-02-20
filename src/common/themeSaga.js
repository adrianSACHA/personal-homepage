import { call, select, takeLatest } from "@redux-saga/core/effects";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { saveDarkThemeInLocalStorage } from "./darkThemInLocalStorage";

function* saveDarkThemeInLocalStorageHandler() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(saveDarkThemeInLocalStorage, isDarkTheme);
}

export function* themeSaga() {
  yield takeLatest(toggleTheme.type, saveDarkThemeInLocalStorageHandler);
}
