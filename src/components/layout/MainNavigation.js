import { Link } from "react-router-dom";
import classes from './MainNavigation.module.scss';

const MainNavigationPage = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationPage;
