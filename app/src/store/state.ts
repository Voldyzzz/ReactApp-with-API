import { configureStore } from "@reduxjs/toolkit";
import AppDataSlice from "./appDataSlice";
import ListOfJokesSlice from "./listOfJokesSlice";

const store = configureStore({
  reducer: {
    AppDataSlice,
    ListOfJokesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
