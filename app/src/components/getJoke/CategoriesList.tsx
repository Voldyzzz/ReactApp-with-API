import React from "react";
import CategoriesItem from "./CategoriesItem";

type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <div className="categoriesList_wrapper">
      <ul>{<CategoriesItem></CategoriesItem>}</ul>
    </div>
  );
};

export default CategoriesList;
