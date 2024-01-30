import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { GenerateSlice } from "../generateSlice";

const slice = GenerateSlice<UserInterface, SliceCaseReducers<UserInterface>>({
  initialState: {
    address: "",
    firstName: "حسین",
    lastName: "جوادی",
    nationalCode: "07004654714",
    avatar: "",
    birthDate: new Date(),
    mobile: "",
  },
  name: "User",
  reducers: {
    update: (state, payload: PayloadAction<UserInterface>) => {},
  },
});

export const { update } = slice.actions;
export default slice.reducer;
