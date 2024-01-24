import { FormEventHandler } from "react";

export type LoginProperty = "email" | "password";

export interface LoginState {
  email: string;
  password: string;
}

export const InitialLoginState: LoginState = {
  email: "",
  password: "",
};

export interface LoginProps extends LoginState {
  onSubmit?: FormEventHandler;
  onInput: (target: LoginProperty, value: string) => void;
  renderContent?: boolean;
}

export interface IParameter {
  name: string;
  value: string;
}
