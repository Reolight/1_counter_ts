import { FormEvent, useState } from "react";
import { LoginState, LoginProperty } from "@common/types";
import { Login } from "@views/Login";

const initialValue : LoginState = {
  email: "",
  password: "",
}

export default function LoginContainer(): JSX.Element {
  const [state, setState] = useState<LoginState>( initialValue );

  /**
   * Функция для обновления свойства состояния.
   * @param target имя свойства, которое обновляется
   * @param value новое значение свойства
   */
  // N.B.: Код внутри setState не является мутацией.
  function onUpdate(target: LoginProperty, value: string) {
    setState(prevState => ({ ...prevState, [target]: value }));
  }

  /**
   * Получает данные из формы и выводит их в консоль, отключает обработку
   * подтверждения формы по умолчанию, очищает поля ввода.
   * @param e FormEvents подтвердённой формы
   */
  function logCredentials(e: FormEvent) {
    // можно получить данные из state этого компонента
    // но можно получить данные из формы и так (в случае отсутсвия контейнера):
    const data = new FormData(e.target as HTMLFormElement);
    console.log(JSON.stringify(Object.fromEntries(data.entries())));

    e.preventDefault();

    setState(initialValue);
  }

  return (
    <Login
      onInput={onUpdate}
      onSubmit={logCredentials}
      renderContent={true}
      email={state.email}
      password={state.password}
    />
  );
}
