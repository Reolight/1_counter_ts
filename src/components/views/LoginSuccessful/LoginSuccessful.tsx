import { StackLayout } from "@progress/kendo-react-layout";
import { Label } from "@progress/kendo-react-labels";

import { LoginInstance } from "@stores/mobx";
import { LoginState } from "@common/types";

interface IProps { 
  dataReceiver: () => LoginState | LoginInstance;
}

export default function LoginSuccessful(props: IProps): JSX.Element {
  const state = props.dataReceiver();

  return (
    <StackLayout orientation="vertical">
      <Label>Email: {state.email}</Label>
      <Label>Password: {state.password}</Label>
    </StackLayout>
  );
}
