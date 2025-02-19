import "./getJoke.sass";
import CategoriesList from "./CategoriesList";
import Search from "./Search";
import ButtonJoke from "./ButtonJoke";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/getJoke";
import { useDispatch, useSelector } from "react-redux";
import { selectOption } from "../../store/appDataSlice";
import { RootState } from "../../store/state";

const GetJokeBlock = () => {
  const [categories, setCategories] = useState<[]>([]);
  const selectedOption = useSelector(
    (state: RootState) => state.AppDataSlice.selectedOption
  );
  const dispatch = useDispatch();

  const handleOnChange = (event: any) => {
    const value: string = event.target.value;

    dispatch(selectOption(value));
  };

  useEffect(() => {
    (async () => {
      const cats = await getCategories();
      setCategories(cats);
    })();
  }, []);

  return (
    <div className="getJokeWrapper">
      <div className="radio">
        <label>
          <input
            type="radio"
            value="random"
            name="getJokeRadio"
            checked={selectedOption === "random" && true}
            onChange={handleOnChange}
          />
          Random
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="from_cat"
            name="getJokeRadio"
            onChange={handleOnChange}
          />
          From categories
        </label>
        {selectedOption === "from_cat" && (
          <CategoriesList categories={categories} />
        )}
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="search"
            name="getJokeRadio"
            onChange={handleOnChange}
          />
          Search
        </label>
        {selectedOption === "search" && <Search />}
      </div>
      <ButtonJoke></ButtonJoke>
    </div>
  );
};

export default GetJokeBlock;
