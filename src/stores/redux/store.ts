import { configureStore } from "@reduxjs/toolkit";
import loginReduxStore from "./loginReduxStore";

// создаёт хранилище redux
export const store = configureStore({
  reducer: {
    loginReducer: loginReduxStore,
  },
});

// определяет типы для TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
