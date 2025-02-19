import "./button.sass";
import getJoke from "../../utility/script";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { useDispatch } from "react-redux";
import { addJoke } from "../../store/listOfJokesSlice";

const Button = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.AppDataSlice.selectedOption
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.AppDataSlice.selectedCategory
  );
  const selectedQuery = useSelector(
    (state: RootState) => state.AppDataSlice.writtenQuery
  );
  const dispatch = useDispatch();

  const handleClickGetJoke = () => {
    (async () => {
      const joke = await getJoke(
        selectedOption,
        selectedCategory,
        selectedQuery
      );
      if (joke === null) {
        console.log("NULL");
        return;
      }
      if (joke && joke.id && joke.value) {
        dispatch(addJoke(joke));
      }
      if (joke.result && joke.result.length > 0) {
        dispatch(addJoke(joke.result[0]));
      }
    })();
  };

  return (
    <button className="buttonJoke" onClick={() => handleClickGetJoke()}>
      Get a joke
    </button>
  );
};

export default Button;
