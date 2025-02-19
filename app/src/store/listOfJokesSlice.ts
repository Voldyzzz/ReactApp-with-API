import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Joke {
  categories: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

interface ListDataState {
  jokes: Joke[];
  favouriteJokes: Joke[];
}

const loadFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const initialState: ListDataState = {
  jokes: loadFromLocalStorage("jokes"),
  favouriteJokes: loadFromLocalStorage("favouriteJokes"),
};

const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const ListOfJokesSlice = createSlice({
  name: "ListDataState",
  initialState,
  reducers: {
    addJoke: (state, action: PayloadAction<any>) => {
      state.jokes.push(action.payload);
      saveToLocalStorage("jokes", state.jokes);
    },
    addFavouriteJoke: (state, action: PayloadAction<string>) => {
      state.jokes.forEach((item) => {
        if (item.id === action.payload) {
          state.favouriteJokes.push(item);
        }
        saveToLocalStorage("jokes", state.jokes);
        saveToLocalStorage("favouriteJokes", state.favouriteJokes);
      });
    },
    removeJoke: (state, action: PayloadAction<string>) => {
      state.jokes = state.jokes.filter((joke) => joke.id !== action.payload);
      saveToLocalStorage("jokes", state.jokes);
    },
    removeFavouriteJoke: (state, action: PayloadAction<string>) => {
      const jokeToRemove = state.favouriteJokes.find(
        (joke) => joke.id === action.payload
      );

      if (jokeToRemove) {
        state.jokes.push(jokeToRemove);
      }

      state.favouriteJokes = state.favouriteJokes.filter(
        (joke) => joke.id !== action.payload
      );

      saveToLocalStorage("jokes", state.jokes);
      saveToLocalStorage("favouriteJokes", state.favouriteJokes);
    },
  },
});

export const { addJoke, addFavouriteJoke, removeJoke, removeFavouriteJoke } =
  ListOfJokesSlice.actions;
export default ListOfJokesSlice.reducer;
