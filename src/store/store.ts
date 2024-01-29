import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});
type AppDispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type DispatchFunc = () => AppDispatchType;
