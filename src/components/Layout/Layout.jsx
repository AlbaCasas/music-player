import Nav from "../Nav";

const Layout = ({ children, onSearch, clearResults }) => {
  return (
    <div className="layout">
      <main className="layout__container">
        <Nav onSearch={onSearch} clearResults={clearResults} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
