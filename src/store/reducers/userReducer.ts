import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { GenerateSlice } from "../generateSlice";
import { UserInterface } from "..";

const slice = GenerateSlice<UserInterface, SliceCaseReducers<UserInterface>>({
  initialState: { family: "", name: "" },
  name: "User",
  reducers: {
    update: (state, payload: PayloadAction<UserInterface>) => {},
  },
});

export const { update } = slice.actions;
export default slice.reducer;
