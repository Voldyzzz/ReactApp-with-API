import "./listOfJokes.sass";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state";

const ListOfJokes = () => {
  const listOfJokes = useSelector(
    (state: RootState) => state.ListOfJokesSlice.jokes
  );
  return (
    <div className="listOf_jokes_container">
      <ul>
        {listOfJokes.map((item) => (
          <ListItem
            key={item.id}
            joke={item.value}
            category={item.categories}
            jokeId={item.id}
            updateData={item.updated_at}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListOfJokes;
