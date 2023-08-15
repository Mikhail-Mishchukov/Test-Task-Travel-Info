import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "./MainPage/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
