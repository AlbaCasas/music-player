import useItunesSearch from "./hooks/useItunesSearch";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./index.scss";

function App() {
  const { onSearch, searchValue, results, errorMessage } = useItunesSearch();
  return (
    <Layout onSearch={onSearch}>
      <Home
        results={results}
        search={searchValue}
        errorMessage={errorMessage}
      />
    </Layout>
  );
}

export default App;
