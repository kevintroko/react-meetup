import classes from "./Layout.module.scss";
import MainNavigationPage from "./MainNavigation";

const Layout = ({children}) => {
  return (
    <div>
        <MainNavigationPage />
      <main className={classes.main}>
    {children}
      </main>
    </div>
  );
};

export default Layout;
