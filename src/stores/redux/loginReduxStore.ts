import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState } from "../../common/types/LoginTypes";
import { UpdatePayload } from "./types/Payloads";

/**
 * Начальное состояние для хранилища
 */
const initialLoginState: LoginState = {
  email: "",
  password: "",
};

/**
 * Создаёт "кусочек" хранилища redux, определяет действия обновления
 * и очистки данных хранилища
 */
const loginReduxSlice = createSlice({
  name: "loginRedux",
  initialState: initialLoginState,
  reducers: {
    update: (state, action: PayloadAction<UpdatePayload>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clear: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

// экспорт доступных действий их хранилища
export const { update, clear } = loginReduxSlice.actions;

export default loginReduxSlice.reducer;
