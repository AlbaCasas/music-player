import { useState } from "react";

const useItunesSearch = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = async (value) => {
    try {
      setSearchValue(value);
      const res = await fetch(`https://itunes.apple.com/search?term=${value}`);
      const data = await res.json();
      setResults(data.results);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(`${error.message} :(`);
    }
  };

  return { onSearch, results, searchValue, errorMessage, setResults };
};

export default useItunesSearch;
