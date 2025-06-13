import { Link, NavLink } from "react-router-dom";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";
import IMAGES from "../../../constants/images";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className="container">
        <nav className={styles.navbar}>
          <Link to={CUSTOM_ROUTES.HOME}>
            <img src={IMAGES.agencyLogo} alt="logo" />
          </Link>

          <div className={styles.rightNavbar}>
            <ul>
              <NavLink
                to={CUSTOM_ROUTES.HOME}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Home
              </NavLink>

              <NavLink
                to={CUSTOM_ROUTES.ABOUT}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                About
              </NavLink>

              <NavLink
                to={CUSTOM_ROUTES.SERVICES}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Services
              </NavLink>

              <NavLink
                to={CUSTOM_ROUTES.PORTFOLIO}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Portfolio
              </NavLink>

              <NavLink
                to={CUSTOM_ROUTES.BLOG}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Blog
              </NavLink>
            </ul>
          </div>

          <Link to={CUSTOM_ROUTES.CONTACT}>
            <button>CONTACT</button>
          </Link>

          <img
            src={IMAGES.hamburgerMenu}
            alt="hamburger-menu"
            className={styles.hamburgerMenu}
            onClick={toggleMenu}
          />
        </nav>
      </div>

      {/* Full Screen Menu */}
      <div
        className={`${styles.fullScreenMenu} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.menuContent}>
          <div className={styles.menuHeader}>
            <img src={IMAGES.agencyLogo} alt="logo" />
            <div className={styles.closeButton} onClick={toggleMenu}>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={styles.menuItems}>
            <NavLink
              to={CUSTOM_ROUTES.HOME}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={toggleMenu}
            >
              Home
            </NavLink>

            <NavLink
              to={CUSTOM_ROUTES.ABOUT}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={toggleMenu}
            >
              About
            </NavLink>

            <NavLink
              to={CUSTOM_ROUTES.SERVICES}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={toggleMenu}
            >
              Services
            </NavLink>

            <NavLink
              to={CUSTOM_ROUTES.PORTFOLIO}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={toggleMenu}
            >
              Portfolio
            </NavLink>

            <NavLink
              to={CUSTOM_ROUTES.BLOG}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={toggleMenu}
            >
              Blog
            </NavLink>

            <Link to={CUSTOM_ROUTES.CONTACT} onClick={toggleMenu}>
              <button>CONTACT</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
