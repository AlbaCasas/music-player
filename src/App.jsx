import { BrowserRouter, Routes, Route } from "react-router-dom";
import useItunesSearch from "./hooks/useItunesSearch";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Player from "./pages/Player";
import "./index.scss";

function App() {
  const { onSearch, searchValue, results, errorMessage, setResults } =
    useItunesSearch();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout onSearch={onSearch}>
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
            <Layout onSearch={onSearch}>
              <Player results={results} />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
