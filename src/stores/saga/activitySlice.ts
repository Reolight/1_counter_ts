import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Activity } from "../../common/types/ActivityTypes";

/**
 * Состояние загрузки activity
 */
interface ActivityState {
  activity?: Activity;
  state: "undefined" | "loading" | "defined" | "error";
  error?: string;
}

const activitySlice = createSlice({
  name: "activity",
  initialState: { state: "undefined" } as ActivityState,
  reducers: {
    requestActivity: (draft) => {
      draft.state = "loading";
      draft.error = undefined;
    },
    requestActivitySuccess: (draft, action: PayloadAction<Activity>) => {
      draft.state = "defined";
      draft.activity = action.payload;
    },
    requestActivityFailed: (draft, action: PayloadAction<string>) => {
      draft.state = "error";
      draft.error = action.payload;
    },
  },
});

export const {
  requestActivity,
  requestActivitySuccess,
  requestActivityFailed,
} = activitySlice.actions;

export default activitySlice.reducer;
