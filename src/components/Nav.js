import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="main-nav">
        <div className="filltering">
          <img className="logo" width="120" src={require('../logo/logo1.png')} alt="logo" />
          <ul>
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
          </ul>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Nav;
