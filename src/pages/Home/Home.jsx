import EmptyState from "./EmptyState";
import Results from "./Results/Results";

const Home = ({ results, search }) => {
  return (
    <div className="home">
      {results.length === 0 ? (
        <EmptyState />
      ) : (
        <Results results={results} search={search} />
      )}
    </div>
  );
};

export default Home;
