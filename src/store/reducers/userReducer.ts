import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { GenerateSlice } from "../generateSlice";

const slice = GenerateSlice<UserInterface, SliceCaseReducers<UserInterface>>({
  initialState: {},
  name: "User",
  reducers: {
    loginUser: (state, { payload }: PayloadAction<UserInterface>) => {
      state.accessToken = payload.accessToken;
      state.address = payload.address;
      state.avatar = payload.avatar;
      state.birthDate = payload.birthDate;
      state.car = payload.car;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.mobile = payload.mobile;
      state.nationalCode = payload.nationalCode;
      state.refreshToken = payload.refreshToken;
      state.updatedAt = payload.updatedAt;
    },
    saveAvatar: (state, { payload }: PayloadAction<string>) => {
      state.avatar = payload;
    },
  },
});

export const { loginUser, saveAvatar } = slice.actions;
export default slice.reducer;
