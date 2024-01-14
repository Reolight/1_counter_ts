import { configureStore } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";
import createSagaMiddleware from "redux-saga";
import { fetchActivitySaga } from "./activitySagas";

const sagaMiddleware = createSagaMiddleware();

// создаём хранилище и добавляем связующий компонент для саг
export const storeSaga = configureStore({
  reducer: activitySlice,
  middleware: (getDefMiddleware) => getDefMiddleware().concat([sagaMiddleware]),
});

// добавляет сагу в связующий компонент
sagaMiddleware.run(fetchActivitySaga);

export type RootSagaState = ReturnType<typeof storeSaga.getState>;
export type AppSagaDispatch = typeof storeSaga.dispatch;
