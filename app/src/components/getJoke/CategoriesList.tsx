import CategoriesItem from "./CategoriesItem";
import "./category.sass";

type Props = {
  categories: [];
};

const CategoriesList = ({ categories }: Props) => {
  return (
    <div className="categoriesList_wrapper">
      <ul>
        {categories.map((item, index) => (
          <CategoriesItem key={index} categoryName={item} />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
