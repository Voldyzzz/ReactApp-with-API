import "./App.sass";
import "./styles/mixins.sass";
import GetJoke from "./components/getJoke";
import ListOfJokes from "./components/listOfJokes";
import ListOfFavouriteJokes from "./components/listOfFavouriteJokes";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleLeftSideBg = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="container">
      <div className={`left-side ${isDark ? "bg-black" : ""}`}>
        <GetJoke />
        <ListOfJokes />
      </div>
      <div className={`right-side ${isDark ? "bg-white" : ""}`}>
        <ListOfFavouriteJokes toggleLeftSideBg={toggleLeftSideBg} />
      </div>
    </div>
  );
}

export default App;
