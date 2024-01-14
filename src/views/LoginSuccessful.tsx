import { StackLayout } from "@progress/kendo-react-layout";
import { useAppSelector } from "../stores/hooks";
import { Label } from "@progress/kendo-react-labels";

export default function LoginSuccessful(): JSX.Element {
  const state = useAppSelector((state) => state.loginReducer);

  return (
    <StackLayout orientation="vertical">
      <Label>Email: {state.email}</Label>
      <Label>Password: {state.password}</Label>
    </StackLayout>
  );
}
