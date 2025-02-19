import CategoriesItem from "./CategoriesItem";
import "./category.sass";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../store/appDataSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state";

type Props = {
  categories: [];
};

const CategoriesList = ({ categories }: Props) => {
  const selectedCategory = useSelector(
    (state: RootState) => state.AppDataSlice.selectedCategory
  );
  const dispatch = useDispatch();

  const handleOnChangeCategory = (event: any) => {
    const value = event.target.value;
    dispatch(selectCategory(value));
  };

  return (
    <div className="categoriesList_wrapper">
      <ul>
        {categories.map((item, index) => (
          <CategoriesItem
            key={index}
            categoryName={item}
            selectedCategory={selectedCategory}
            handleOnChangeCategory={handleOnChangeCategory}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
