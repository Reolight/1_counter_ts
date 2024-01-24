import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@stores/hooks";
import { update } from "@stores/redux";
import { Login } from "@views/Login";
import { LoginState, InitialLoginState, LoginProperty } from "@common/types/LoginTypes";
import { useNavigate } from "react-router-dom";
import LoginWrapper from "@views/LoginWrapper";

export default function LoginReduxContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState<LoginState>(InitialLoginState);
  const reduxState = useAppSelector((redState) => redState.loginReducer);

  function onInput(target: LoginProperty, value: string) {
    setState((prevState) => ({ ...prevState, [target]: value }));
  }

  function setCredentials(e: FormEvent) {
    const data = new FormData(e.target as HTMLFormElement);
    console.log(JSON.stringify(Object.fromEntries(data.entries())));

    dispatch(update({ email: state.email, password: state.password }));
    navigate("success");
    e.preventDefault();
  }

  return (
    <LoginWrapper email={reduxState.email}>
      <Login
        email={state.email}
        password={state.password}
        renderContent={true}
        onInput={onInput}
        onSubmit={setCredentials}
      />
    </LoginWrapper>
  );
}
