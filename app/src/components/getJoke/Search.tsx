import "./search.sass";
import { selectQuery } from "../../store/appDataSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Search = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");

  const onChangeInputText = (event: any) => {
    const value = event.target.value.trim();

    if (value.length >= 3 && value.length <= 120) {
      setError("");
      dispatch(selectQuery(value));
    }
    if (value.length < 3) {
      setError("Minimum 3 characters");
    }
    if (value.length > 120) {
      setError("Maximum 120 characters");
    }
  };

  return (
    <div className="search_wrapper">
      <input
        type="text"
        placeholder="Free text search..."
        onChange={onChangeInputText}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Search;
