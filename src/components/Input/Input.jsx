import { FaSearch } from "react-icons/fa";

const Input = ({ onKeyPress }) => {
  return (
    <div className="input">
      <FaSearch className="input__icon" />
      <input className="input__input" onKeyPress={onKeyPress} />
    </div>
  );
};

export default Input;
