import { FaSearch } from "react-icons/fa";

const Input = () => {
  return (
    <div className="input">
      <FaSearch className="input__icon" />
      <input className="input__input" />
    </div>
  );
};

export default Input;
