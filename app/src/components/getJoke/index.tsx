import Articles from "./Articles";
import GetJokeBlock from "./GetJokeBlock";

type Props = {};

const GetJoke = ({}: Props) => {
  return (
    <>
      <div className="main_container">
        <div>
          <Articles />
          <GetJokeBlock />
        </div>
      </div>
    </>
  );
};

export default GetJoke;
