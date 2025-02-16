import React from "react";

const GetJokeBlock = () => {
  return (
    <div className="getJokeWrapper">
      <div className="radio">
        <label>
          <input type="radio" value="random" checked={true} />
          Random
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="from_cat" />
          From categories
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="search" />
          Search
        </label>
      </div>
    </div>
  );
};

export default GetJokeBlock;
