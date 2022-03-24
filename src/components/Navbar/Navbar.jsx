import { Link } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header-3pt">
      <div className="header-logo-3pt">
        <Link to="/">
          <div className="header-left">
            <img src="logo.png" alt="" className="header-img-3pt" />
            <h2 className="company-name">Animotion</h2>
          </div>
        </Link>
      </div>

      <input type="search" className="search-box" placeholder="Search.." />

      <i className="fas fa-bars hamburger-3pt"></i>
      <div className="header-icons-3pt">
        <nav>
          <ul className="header-menu-3pt">
            <li className="menu-item-3pt">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="menu-item-3pt">
              <Link to="/explore" className="nav-link">
                Explore
              </Link>
            </li>
            <li className="menu-item-3pt">
              <Link to="/music" className="nav-link">
                Music
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
