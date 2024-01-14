import { Label } from "@progress/kendo-react-labels";
import { StackLayout } from "@progress/kendo-react-layout";
import { useMst } from "../stores/mobx/loginModel";

export default function LoginSuccessfulMst(): JSX.Element {
  const loginState = useMst();

  return (
    <StackLayout orientation="vertical">
      <Label>Email: {loginState.email}</Label>
      <Label>Password: {loginState.password}</Label>
    </StackLayout>
  );
}
