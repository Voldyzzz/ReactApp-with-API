import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  selectedOption: string;
  selectedCategory: string;
  writtenQuery: string;
}

const initialState: AppState = {
  selectedOption: "random",
  selectedCategory: "animal",
  writtenQuery: "",
};

const AppDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    selectOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    selectQuery: (state, action: PayloadAction<string>) => {
      state.writtenQuery = action.payload;
    },
  },
});

export const { selectOption, selectCategory, selectQuery } =
  AppDataSlice.actions;

export default AppDataSlice.reducer;
