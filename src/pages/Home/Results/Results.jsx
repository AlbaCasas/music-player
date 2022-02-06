import useResultsSort from "../../../hooks/useResultsSort";
import { formatMillis } from "./utils";

const Results = ({ results, search, setResults }) => {
  const {
    toggleSortOrder,
    getResultsSortedByDuration,
    getResultsSortedByPrice,
  } = useResultsSort({
    results,
  });

  return (
    <div className="results">
      <h3 className="results__title">Searching "{search}" </h3>
      <table className="results__table">
        <thead>
          <tr>
            <th className="cell cell--image" />
            <th className="cell cell--song">Song</th>
            <th className="cell cell--artist">Artist</th>
            <th className="cell">Album</th>
            <th
              className="cell cell--clickable"
              onClick={() => {
                setResults(getResultsSortedByDuration());
                toggleSortOrder();
              }}
            >
              Duration
            </th>
            <th className="cell cell--clickable">Gender</th>
            <th
              className="cell cell--clickable"
              onClick={() => {
                setResults(getResultsSortedByPrice());
                toggleSortOrder();
              }}
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr key={result.trackId}>
                <td className="cell cell--image">
                  <img src={result.artworkUrl60} alt={result.trackName} />
                </td>
                <td className="cell cell--song cell--clickable">
                  {result.trackName}
                </td>
                <td className="cell cell--artist">{result.artistName}</td>
                <td className="cell">{result.collectionName}</td>
                <td>{formatMillis(result.trackTimeMillis)}</td>
                <td className="cell">{result.primaryGenreName}</td>
                <td className="cell">
                  {result.trackPrice && `${result.trackPrice}€`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
