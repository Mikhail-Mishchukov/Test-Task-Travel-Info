import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInitialDataRequest } from "./api";
import { LoadingPageType, MainPageState } from "./entities";
import { RootState } from "../store";

export const getTripData = createAsyncThunk(
  "MainPage/getTripData",
  async (_, { getState }) => {
    const state = getState() as RootState;
    return await getInitialDataRequest(
      state.mainPage.loadingPageType === LoadingPageType.Next ? 1 : 2
    );
  }
);

const initialState: MainPageState = {
  initialLoading: true,
  errorText: "",

  loadingPageType: LoadingPageType.Next,
  trips: [],
};

const slice = createSlice({
  name: "MainPage",
  initialState,
  reducers: {
    setLoadingPageType: (state, action: PayloadAction<LoadingPageType>) => {
      state.loadingPageType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTripData.pending, (state) => {
      state.errorText = "";
    });
    builder.addCase(getTripData.fulfilled, (state, action) => {
      state.initialLoading = false;

      if (state.loadingPageType === LoadingPageType.Next) {
        state.trips = state.trips.concat(action.payload);
      }

      if (state.loadingPageType === LoadingPageType.Previous) {
        state.trips = action.payload.concat(state.trips);
      }
    });
    builder.addCase(getTripData.rejected, (state, action) => {
      state.initialLoading = false;
      state.errorText = action.error.message || "UnknownError";
    });
  },
});

export const { setLoadingPageType } = slice.actions;
export const mainPageReducer = slice.reducer;
