import {
  getJokeWithCategory,
  getQueryJoke,
  getRandomJoke,
} from "../services/getJoke";

const getJoke = (
  selectedOption: string,
  selectedCategory: string,
  selectedQuery: string
) => {
  switch (selectedOption) {
    case "from_cat":
      return getJokeWithCategory(selectedCategory);
    case "search":
      if (selectedQuery.length < 3 || selectedQuery.length > 120) {
        console.error("Query must be between 3 and 120 characters");
        return null;
      }
      return getQueryJoke(selectedQuery);
    default:
      return getRandomJoke();
  }
};

export default getJoke;
