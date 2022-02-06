import { useState } from "react";

const useResultsSort = ({ results }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  };

  const getResultsSortedByDuration = () => {
    return results.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.trackTimeMillis - b.trackTimeMillis;
      }
      return b.trackTimeMillis - a.trackTimeMillis;
    });
  };

  const getResultsSortedByPrice = () => {
    return results.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.trackPrice - b.trackPrice;
      }
      return b.trackPrice - a.trackPrice;
    });
  };

  const getResultsSortedByGenre = () => {
    return results.sort((a, b) => {
      if (a.primaryGenreName < b.primaryGenreName) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a.primaryGenreName > b.primaryGenreName) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  return {
    toggleSortOrder,
    getResultsSortedByDuration,
    getResultsSortedByPrice,
    getResultsSortedByGenre,
  };
};

export default useResultsSort;
