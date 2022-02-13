import { BrowserRouter, Routes, Route } from "react-router-dom";
import useItunesSearch from "./hooks/useItunesSearch";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Player from "./pages/Player";
import "./index.scss";

function App() {
  const {
    onSearch,
    searchValue,
    results,
    errorMessage,
    setResults,
    clearResults,
  } = useItunesSearch();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Layout onSearch={onSearch} clearResults={clearResults}>
              <Home
                results={results}
                search={searchValue}
                errorMessage={errorMessage}
                setResults={setResults}
              />
            </Layout>
          }
        />
        <Route
          path="/player/:trackId"
          element={
            <Layout onSearch={onSearch} clearResults={clearResults}>
              <Player results={results} />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
