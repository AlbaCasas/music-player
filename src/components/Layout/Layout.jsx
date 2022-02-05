import Nav from "../Nav";

const Layout = ({ children, onSearch }) => {
  return (
    <div className="layout">
      <main className="layout__container">
        <Nav onSearch={onSearch} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
