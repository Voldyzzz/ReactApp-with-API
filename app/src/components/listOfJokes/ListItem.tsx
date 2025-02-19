import { useDispatch } from "react-redux";
import MessageIcon from "../../assets/message.svg";
import FavouriteIcon from "../../assets/notFilledHeart.svg";
import { addFavouriteJoke, removeJoke } from "../../store/listOfJokesSlice";

type Props = {
  joke: string;
  category: [];
  jokeId: string;
  updateData: string;
};

const ListItem = ({ joke, category, jokeId, updateData }: Props) => {
  const dispatch = useDispatch();

  const handleClickFavouriteBtn = () => {
    dispatch(addFavouriteJoke(jokeId));
    dispatch(removeJoke(jokeId));
  };

  return (
    <li className="list-item_wrapper">
      <button
        className="favourite-btn"
        onClick={() => handleClickFavouriteBtn()}
      >
        <img src={FavouriteIcon} alt="HeartIcon" />
      </button>
      <div className="list_item_block">
        <img src={MessageIcon} alt="Message" />
        <div className="list_item_block_wrapper">
          <p className="icon-id">
            ID: <a>{jokeId}</a>
          </p>
          <p className="text-joke">{joke}</p>
          <div className="info-wrapper">
            <span className="date-joke">{updateData}</span>
            <span className="category">{category}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
