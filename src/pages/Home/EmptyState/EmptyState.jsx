import { FaSearch } from "react-icons/fa";

const EmptyState = () => {
  return (
    <>
      <FaSearch className="empty-state__icon" />
      <span className="empty-state__text">
        Use the search bar to find songs
      </span>
    </>
  );
};

export default EmptyState;
