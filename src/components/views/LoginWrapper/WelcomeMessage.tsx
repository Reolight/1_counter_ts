import { Label } from "@progress/kendo-react-labels";

interface WelcomeProps {
  email?: string;
}

export default function WelcomeMessage(props: WelcomeProps) {
  return (
    <Label style={{ margin: 4 }}>
      {`Hello, ${(!!props.email? props.email : 'guest')}!`}
    </Label>
  );
}
