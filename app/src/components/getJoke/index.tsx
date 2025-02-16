import Articles from "./Articles";
import GetJokeBlock from "./getJokeBlock";

type Props = {};

const GetJoke = ({}: Props) => {
  return (
    <div>
      <Articles />
      <GetJokeBlock />
    </div>
  );
};

export default GetJoke;
