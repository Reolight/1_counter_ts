import { FormEvent, useState } from "react";
import { LoginProperty, LoginState } from "@common/types";
import { useNavigate } from "react-router-dom";
import { useMst } from "@stores/mobx";
import LoginWrapper from "@views/LoginWrapper";
import { Login } from "@views/Login";

const initialState: LoginState = {
  email: "",
  password: "",
};

export default function LoginMstContainer() {
  const loginSavedState = useMst();
  const navigate = useNavigate();
  const [state, setState] = useState<LoginState>(
    loginSavedState.logged
      ? { email: loginSavedState.email!, password: loginSavedState.password! }
      : initialState
  );

  function onInput(target: LoginProperty, value: string) {
    setState((prevState) => ({ ...prevState, [target]: value }));
  }

  function setCredentials(e: FormEvent) {
    loginSavedState.login(state.email, state.password);
    setState(initialState);
    navigate("success");
    e.preventDefault();
  }

  return (
    <LoginWrapper email={loginSavedState.email}>
      <Login
        email={state.email}
        password={state.password}
        onInput={onInput}
        onSubmit={setCredentials}
        renderContent
      />
    </LoginWrapper>
  );
}
