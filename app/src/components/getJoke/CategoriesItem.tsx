type Props = {
  categoryName: string;
  selectedCategory: string;
  handleOnChangeCategory: (e: any) => void;
};

const CategoriesItem = ({
  categoryName,
  selectedCategory,
  handleOnChangeCategory,
}: Props) => {
  return (
    <label
      className={`categoryItem ${
        categoryName === selectedCategory ? "selected" : ""
      }`}
    >
      <input
        type="radio"
        value={categoryName}
        name="selectCategory"
        onChange={() => handleOnChangeCategory(event)}
      />
      {categoryName.toUpperCase()}
    </label>
  );
};

export default CategoriesItem;
