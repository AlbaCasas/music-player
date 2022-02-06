import useItunesSearch from "./hooks/useItunesSearch";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./index.scss";
import useResultsSort from "./hooks/useResultsSort";

function App() {
  const { onSearch, searchValue, results, errorMessage, setResults } =
    useItunesSearch();

  console.log({ results });
  return (
    <Layout onSearch={onSearch}>
      <Home
        results={results}
        search={searchValue}
        errorMessage={errorMessage}
        setResults={setResults}
      />
    </Layout>
  );
}

export default App;
