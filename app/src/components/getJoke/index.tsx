import Articles from "./Articles";
import GetJokeBlock from "./getJokeBlock";

type Props = {};

const GetJoke = ({}: Props) => {
  return (
    <>
      <Articles />
      <GetJokeBlock />
    </>
  );
};

export default GetJoke;
