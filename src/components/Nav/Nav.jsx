import Input from "../Input";

const Nav = ({ onSearch }) => {
  return (
    <header className="nav">
      <h1 children="nav__title">Music Player</h1>
      <Input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onSearch(event.target.value);
          }
        }}
      />
    </header>
  );
};

export default Nav;
