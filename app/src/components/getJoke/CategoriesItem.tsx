import { useState } from "react";

type Props = {
  categoryName: string;
};

const CategoriesItem = ({ categoryName }: Props) => {
  const [isSelected, setSelected] = useState<boolean>(false);

  const handleOnChange = () => {
    setSelected(!isSelected);
  };

  return (
    <label className={`categoryItem ${isSelected && "selected"}`}>
      <input
        type="checkbox"
        value={categoryName}
        name="selectCategory"
        onChange={handleOnChange}
      />
      {categoryName.toUpperCase()}
    </label>
  );
};

export default CategoriesItem;
