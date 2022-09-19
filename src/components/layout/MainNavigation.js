import { Link } from "react-router-dom";

const MainNavigationPage = () => {
  return (
    <header>
      <div>React Meetup</div>

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
