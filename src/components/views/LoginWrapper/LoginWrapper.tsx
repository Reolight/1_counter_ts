import { StackLayout } from "@progress/kendo-react-layout";
import WelcomeMessage from "./WelcomeMessage";

interface IProps {
    email? : string;
    children?: JSX.Element;
}

export default function LoginWrapper(props : IProps): JSX.Element {
  return (
    <StackLayout orientation="vertical">
      <WelcomeMessage
        email={props.email}
      />
      {props.children}
    </StackLayout>
  );
}
