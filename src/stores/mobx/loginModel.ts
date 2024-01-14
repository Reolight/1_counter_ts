import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";

/**
 * Модель mst для входа. Содержит свойства для пароля и почты,
 * а также флаг, отображающий текущее состояние аутентификации пользователя
 */
const LoginModel = types
  .model({
    email: types.string,
    password: types.string,
    logged: false,
  })
  .actions((self) => ({
    login(email: string, password: string) {
      self.email = email;
      self.password = password;
      self.logged = true;
    },
    clear() {
      self.email = "";
      self.password = "";
      self.logged = false;
    },
  }));

/**
 * Начальное состояние модели входа
 */
let initialState = LoginModel.create({
  email: "",
  password: "",
});

/**
 * Хранилище для созданной модели входа
 */
export const loginStore = initialState;

// создание контекста с хранилищем для приложения
export type LoginInstance = Instance<typeof LoginModel>;
const LoginStoreContext = createContext<null | LoginInstance>(null);

/**
 * Провайдер хранилища MST с моделью входа
 */
export const LoginStoreProvider = LoginStoreContext.Provider;

/**
 * Используется для получения хранилища с моделью из контекста.
 * @returns хранилище с моделью входа
 */
export function useMst() {
  const store = useContext(LoginStoreContext);
  if (store === null) {
    throw new Error("Store not found. Add store provider");
  }

  return store;
}
