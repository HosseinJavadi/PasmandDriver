import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { GenerateSlice } from "../generateSlice";

const slice = GenerateSlice<UserInterface, SliceCaseReducers<UserInterface>>({
  initialState: {
    address: "قم و آبادی بقل جوب بالایی کنار تیرک اول سمت درب جلویی",
    firstName: "حسین",
    lastName: "جوادی",
    nationalCode: "07004654714",
    avatar: "",
    birthDate: new Date(),
    mobile: "09305326175",
  },
  name: "User",
  reducers: {
    update: (state, payload: PayloadAction<UserInterface>) => {},
  },
});

export const { update } = slice.actions;
export default slice.reducer;
