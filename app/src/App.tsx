import "./App.sass";
import "./styles/mixins.sass";

import GetJoke from "./components/getJoke";

function App() {
  return (
    <div className="container">
      <div className="left-side">
        <GetJoke />
      </div>
    </div>
  );
}

export default App;
