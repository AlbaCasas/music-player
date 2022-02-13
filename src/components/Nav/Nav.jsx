import { useLocation, useNavigate } from "react-router-dom";
import Input from "../Input";

const Nav = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoClick = () => {
    navigate("/");
  };
  return (
    <header className="nav">
      <h1 onClick={onLogoClick} className="nav__title">
        Music Player
      </h1>
      <Input
        onKeyPress={async (event) => {
          if (event.key === "Enter") {
            await onSearch(event.target.value);
            if (location.pathname !== "/") {
              navigate("/");
            }
          }
        }}
      />
    </header>
  );
};

export default Nav;
