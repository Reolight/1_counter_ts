import { Label } from "@progress/kendo-react-labels";

interface WelcomeProps {
  logged: boolean;
  email?: string;
}

export default function WelcomeMessage(props: WelcomeProps) {
  return (
    <Label style={{ margin: 4 }}>
      Hello,
      {props.logged ? ` ${props.email}` : ` guest`}!
    </Label>
  );
}
