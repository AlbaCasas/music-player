import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <FaSearch className="home__icon" />
      <span className="home__text">Use the search bar to find songs</span>
    </div>
  );
};

export default Home;
