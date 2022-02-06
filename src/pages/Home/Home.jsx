import EmptyState from "./EmptyState";
import Results from "./Results/Results";

const Home = ({ results, search, errorMessage }) => {
  return (
    <div className="home">
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : results.length === 0 ? (
        <EmptyState />
      ) : (
        <Results results={results} search={search} />
      )}
    </div>
  );
};

export default Home;
