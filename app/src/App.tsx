import "./App.sass";
import "./styles/mixins.sass";
import GetJoke from "./components/getJoke";
import ListOfJokes from "./components/listOfJokes";
import ListOfFavouriteJokes from "./components/listOfFavouriteJokes";
import { useState } from "react";

function App() {
  const [isBgBlack, setBgBlack] = useState<boolean>(false);

  const changeContainerBg = () => {
    setBgBlack((prev) => !prev);
  };

  return (
    <div className={`container ${isBgBlack ? "bg-black" : ""}`}>
      <div className="left-side">
        <GetJoke />
        <ListOfJokes />
      </div>
      <div className="right-side">
        <ListOfFavouriteJokes changeContainerBg={changeContainerBg} />
      </div>
    </div>
  );
}

export default App;
