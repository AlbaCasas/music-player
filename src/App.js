import { useState } from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./index.scss";

function App() {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = async (value) => {
    setSearchValue(value);
    const res = await fetch(`https://itunes.apple.com/search?term=${value}`);
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <Layout onSearch={onSearch}>
      <Home results={results} search={searchValue} />
    </Layout>
  );
}

export default App;
