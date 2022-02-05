import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="layout__container">
        <Nav />
        {children}
      </main>
    </div>
  );
};

export default Layout;
