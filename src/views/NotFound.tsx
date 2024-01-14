import { Label } from "@progress/kendo-react-labels";
import { StackLayout } from "@progress/kendo-react-layout";

export default function NotFound(): JSX.Element {
  return (
    <StackLayout align={{ vertical: "middle", horizontal: "center" }}>
      <Label style={{ fontSize: 42, color: "red" }}>404: Not found</Label>
    </StackLayout>
  );
}
