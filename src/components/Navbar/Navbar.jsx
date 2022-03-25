import { Link } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";
import { useState } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import { sideNavbarItems } from "./sideNavbarItems";
import { itemStyle, titleStyle } from "./sideNav";

export const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  return (
    <header className="header-3pt">
      <div className="header-left">
        <MenuIcon onClick={() => setShowSideNav(true)} />
        <Link to="/">
          <h2 className="company-name">Animotion</h2>
        </Link>
      </div>

      <input type="search" className="search-box" placeholder="Search.." />

      <div className="header-icons-3pt">
        <nav>
          <ul className="header-menu-3pt">
            <li className="menu-item-3pt">
              <Link to="/login" className="nav-link">
                <button className="login-btn">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <SideNav showNav={showSideNav} onHideNav={() => setShowSideNav(false)}
        title="Animotion"
        items={sideNavbarItems.map((link, id) => {
          return <Link to={link.path} key={id} onClick={() => setShowSideNav(false)}>
            {link.name}
          </Link>
        })}

        titleStyle={titleStyle}
        itemStyle={itemStyle}
        className="sidenav"
      />
    </header>
  );
};
