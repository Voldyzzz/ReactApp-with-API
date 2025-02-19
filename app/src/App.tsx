import "./App.sass";
import "./styles/mixins.sass";
import GetJoke from "./components/getJoke";
import ListOfJokes from "./components/listOfJokes";
import ListOfFavouriteJokes from "./components/listOfFavouriteJokes";

function App() {
  return (
    <div className="container">
      <div className="left-side">
        <GetJoke />
        <ListOfJokes />
      </div>
      <div className="right-side">
        <ListOfFavouriteJokes />
      </div>
    </div>
  );
}

export default App;
