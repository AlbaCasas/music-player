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
    const sortedResults = results.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.trackTimeMillis - b.trackTimeMillis;
      }
      return b.trackTimeMillis - a.trackTimeMillis;
    });

    return sortedResults;
  };

  const getResultsSortedByPrice = () => {
    const sortedResults = results.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.trackPrice - b.trackPrice;
      }
      return b.trackPrice - a.trackPrice;
    });

    return sortedResults;
  };

  return {
    toggleSortOrder,
    getResultsSortedByDuration,
    getResultsSortedByPrice,
  };
};

export default useResultsSort;
