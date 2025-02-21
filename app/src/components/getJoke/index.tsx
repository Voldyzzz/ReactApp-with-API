import Articles from "./Articles";
import GetJokeBlock from "./GetJokeBlock";

type Props = {};

const GetJoke = ({}: Props) => {
  return (
    <>
      <div>
        <Articles />
        <GetJokeBlock />
      </div>
    </>
  );
};

export default GetJoke;
