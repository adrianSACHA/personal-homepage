import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import reposReducer from "../features/personalHomepage/Portfolio/reposSlice";
import themeReducer from "../common/ThemeSwitcher/themeSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    projects: reposReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
