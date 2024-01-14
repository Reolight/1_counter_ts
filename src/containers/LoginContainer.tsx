import { produce } from "immer";
import { FormEvent, useState } from "react";
import { ILoginState, loginProperty } from "../types/LoginTypes";
import Login from "../views/Login";

export default function LoginContainer(): JSX.Element {
  const [state, setState] = useState<ILoginState>({
    email: "",
    password: "",
  });

  /**
   * Функция для обновления свойства состояния.
   * @param target имя свойства, которое обновляется
   * @param value новое значение свойства
   */
  // N.B.: Код внутри setState не является мутацией.
  function onUpdate(target: loginProperty, value: string) {
    setState(
      produce(state, (draft) => {
        draft[target] = value;
      })
    );
  }

  /**
   * Получает данные из формы и выводит их в консоль, отключает обработку
   * подтверждения формы по умолчанию, очищает поля ввода.
   * @param e FormEvents подтвердённой формы
   */
  function onSubmit(e: FormEvent) {
    // можно получить данные из state этого компонента
    // но можно получить данные из формы и так (в случае отсутсвия контейнера):
    const data = new FormData(e.target as HTMLFormElement);
    console.log(JSON.stringify(Object.fromEntries(data.entries())));

    e.preventDefault();

    setState(
      produce(state, (draft) => {
        draft.email = "";
        draft.password = "";
      })
    );
  }

  return (
    <Login
      onInput={onUpdate}
      onSubmit={onSubmit}
      renderContent={true}
      {...state}
    />
  );
}
