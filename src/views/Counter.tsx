import { Button } from "@progress/kendo-react-buttons";
import { Label } from "@progress/kendo-react-labels";
import { StackLayout } from "@progress/kendo-react-layout";
import { MouseEventHandler } from "react";

interface IProps {
  counterName?: string | undefined;
  count: number;
  increment: MouseEventHandler;
  decrement: MouseEventHandler;
  reset: MouseEventHandler;
}

const defStyle = { margin: 8 };

const Counter = (props: IProps): JSX.Element => (
  <StackLayout
    orientation="vertical"
    align={{ horizontal: "center", vertical: "middle" }}
  >
    <Label style={defStyle}>
      {props.counterName && props.counterName + " "}
      {props.count}
    </Label>
    <Button style={defStyle} onClick={props.increment}>
      Increment
    </Button>
    <Button style={defStyle} onClick={props.decrement}>
      Decrement
    </Button>
    <Button style={defStyle} onClick={props.reset}>
      Reset
    </Button>
  </StackLayout>
);

export default Counter;
