import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="container">{props.children}</main>
    </>
  );
};

export default Layout;
