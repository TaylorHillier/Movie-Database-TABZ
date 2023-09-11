import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/top-rated">Top Rated</NavLink>
        </li>
        <li>
          <NavLink to="/now-playing">Now Playing</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
