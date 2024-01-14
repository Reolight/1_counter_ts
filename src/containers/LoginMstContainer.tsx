import { FormEvent, useState } from "react";
import { useMst } from "../stores/mobx/loginModel";
import { ILoginState, loginProperty } from "../types/LoginTypes";
import Login from "../views/Login";
import { produce } from "immer";
import { StackLayout } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";
import WelcomeMessage from "../views/WelcomeMessage";

const initialState: ILoginState = {
  email: "",
  password: "",
};

export default function LoginMstContainer() {
  const loginSavedState = useMst();
  const navigate = useNavigate();
  const [state, setState] = useState<ILoginState>(
    loginSavedState.logged
      ? { email: loginSavedState.email, password: loginSavedState.password }
      : { ...initialState }
  );

  function onInput(target: loginProperty, value: string) {
    setState(
      produce(state, (draft) => {
        draft[target] = value;
      })
    );
  }

  function onSubmit(e: FormEvent) {
    loginSavedState.login(state.email, state.password);
    setState({ ...initialState });
    navigate("success");
    e.preventDefault();
  }

  return (
    <StackLayout orientation="vertical">
      <WelcomeMessage
        logged={loginSavedState.logged}
        email={loginSavedState.email}
      />
      <Login
        email={state.email}
        password={state.password}
        renderContent
        onInput={onInput}
        onSubmit={onSubmit}
      />
    </StackLayout>
  );
}
