import { StackLayout } from "@progress/kendo-react-layout";
import { useSagaDispatch, useSagaSelector } from "@stores/hooks";
import { Label } from "@progress/kendo-react-labels";
import { Button } from "@progress/kendo-react-buttons";
import { fetchActivityAction } from "@stores/saga";

export default function GetActivitySaga() {
  const dispatch = useSagaDispatch();
  const content = useSagaSelector((state) => state);

  return (
    <StackLayout orientation="vertical">
      <Label>Press the button to get new activity:</Label>
      <Button
        style={{ width: 220, margin: 4 }}
        disabled={content.state === "loading"}
        onClick={() => dispatch(fetchActivityAction())}
      >
        Get activity
      </Button>

      {content.error && (
        <Label style={{ color: "darkred" }}>{content.error}</Label>
      )}

      {content.state === "loading" && (
        <Label style={{ fontStyle: "italic" }}>
          New activity is loading...
        </Label>
      )}

      {content.activity && (
        <>
          {Object.entries(content.activity)
            .filter((kvp) => !!kvp[1] || kvp[1] === 0)
            .map((keyValPairs, index) => {
              return (
                <Label key={index} style={{ margin: 2 }}>
                  {keyValPairs[0]}: {keyValPairs[1]}
                </Label>
              );
            })}
        </>
      )}
    </StackLayout>
  );
}
