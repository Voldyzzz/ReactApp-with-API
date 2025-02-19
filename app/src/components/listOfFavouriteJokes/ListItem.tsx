import MessageIcon from "../../assets/message.svg";
import FavouriteIcon from "../../assets/FilledHeart.svg";
import { useDispatch } from "react-redux";
import { removeFavouriteJoke } from "../../store/listOfJokesSlice";

type Props = {
  joke: string;
  jokeId: string;
  updateData: string;
};

const ListItem = ({ joke, jokeId, updateData }: Props) => {
  const dispatch = useDispatch();
  const handleClickUnFavouriteBtn = () => {
    dispatch(removeFavouriteJoke(jokeId));
  };

  return (
    <li className="list-item_wrapper">
      <button
        className="unfavourite-btn"
        onClick={() => handleClickUnFavouriteBtn()}
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
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
