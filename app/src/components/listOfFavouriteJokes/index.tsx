import "./listOfFavouriteJokes.sass";
import "./ham-menu.sass";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { useEffect } from "react";

type Props = {
  changeContainerBg: () => void;
};

const ListOfFavouriteJokes = ({ changeContainerBg }: Props) => {
  const listOfJokes = useSelector(
    (state: RootState) => state.ListOfJokesSlice.favouriteJokes
  );

  useEffect(() => {
    const hamMenu = document.querySelector(".ham_menu");
    const listOffScreen = document.querySelector(".list-off-screen");

    const handleOnClickHamMenu = () => {
      hamMenu?.classList.toggle("active");
      listOffScreen?.classList.toggle("active");
      changeContainerBg();
    };

    hamMenu?.addEventListener("click", handleOnClickHamMenu);

    return () => {
      hamMenu?.removeEventListener("click", handleOnClickHamMenu);
    };
  }, []);
  return (
    <div className="listOfFavouriteJokes">
      <div className="ham_menu_wrapper">
        <div className="ham_menu">
          <span></span>
          <span></span>
        </div>
        <h3>Favourite</h3>
      </div>
      <ul className="list-off-screen">
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
