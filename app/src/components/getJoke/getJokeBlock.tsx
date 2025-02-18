import "./getJoke.sass";
import CategoriesList from "./CategoriesList";
import Search from "./Search";
import ButtonJoke from "./ButtonJoke";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/getJoke";

const GetJokeBlock = () => {
  const [checkedRadio, setCheckedRadio] = useState<string>("random");
  const [categories, setCategories] = useState<[]>([]);

  const handleOnChange = (event: any) => {
    const value: string = event.target.value;

    setCheckedRadio(value);
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
            checked={checkedRadio === "random" && true}
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
        {checkedRadio === "from_cat" && (
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
        {checkedRadio === "search" && <Search />}
      </div>
      <ButtonJoke checkedRadio={checkedRadio}></ButtonJoke>
    </div>
  );
};

export default GetJokeBlock;
