import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { update } from "../stores/redux/loginReduxStore";
import Login from "../views/Login";
import { ILoginState, InitialLoginState, loginProperty } from "../types/LoginTypes";
import { produce } from "immer";
import { useNavigate } from "react-router-dom";
import { StackLayout } from "@progress/kendo-react-layout";
import WelcomeMessage from "../views/WelcomeMessage";

export default function LoginReduxContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState<ILoginState>({
    ...InitialLoginState,
  });
  const reduxState = useAppSelector((redState) => redState.loginReducer);

  function onInput(target: loginProperty, value: string) {
    setState(
      produce(state, (draft) => {
        draft[target] = value;
      })
    );
  }

  function onSubmit(e: FormEvent) {
    const data = new FormData(e.target as HTMLFormElement);
    console.log(JSON.stringify(Object.fromEntries(data.entries())));

    dispatch(update({ email: state.email, password: state.password }));
    navigate("success");
    e.preventDefault();
  }

  return (
    <StackLayout orientation="vertical">
      <WelcomeMessage logged={!!reduxState.email} email={reduxState.email} />
      <Login
        email={state.email}
        password={state.password}
        renderContent={true}
        onInput={onInput}
        onSubmit={onSubmit}
      />
    </StackLayout>
  );
}
