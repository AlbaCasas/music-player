const Results = ({ results, search }) => {
  return (
    <div className="results">
      <h3>Searching "{search}" </h3>
      <table className="results__table">
        <thead>
          <tr>
            <th className="th">Song</th>
            <th className="th">Artist</th>
            <th className="th">Album</th>
            <th className="th th--clickable">Duration</th>
            <th className="th th--clickable">Gender</th>
            <th className="th th--clickable">Price</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr>
                <td>{result.trackName}</td>
                <td>{result.artistName}</td>
                <td>{result.collectionName}</td>
                <td>{result.trackTimeMillis}</td>
                <td>{result.primaryGenreName}</td>
                <td>{result.trackPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
