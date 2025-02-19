import "./listOfFavouriteJokes.sass";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state";

const ListOfFavouriteJokes = () => {
  const listOfJokes = useSelector(
    (state: RootState) => state.ListOfJokesSlice.favouriteJokes
  );
  return (
    <div className="listOfFavouriteJokes">
      <h3>Favourite</h3>
      <ul>
        {listOfJokes.map((item) => (
          <ListItem
            key={item.id}
            joke={item.value}
            jokeId={item.id}
            updateData={item.updated_at}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListOfFavouriteJokes;
