import { FormEventHandler } from "react";

export type loginProperty = "email" | "password";

export interface ILoginState {
  email: string;
  password: string;
}

export const InitialLoginState: ILoginState = {
  email: "",
  password: "",
};

export interface ILoginProps extends ILoginState {
  onSubmit?: FormEventHandler;
  onInput: (target: loginProperty, value: string) => void;
  renderContent?: boolean;
}

export interface IParameter {
  name: string;
  value: string;
}
