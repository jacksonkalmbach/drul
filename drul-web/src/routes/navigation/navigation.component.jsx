import { Link, Outlet, useLocation } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="navigation-container">
        <Link className={`logo ${pathname === "/" ? "active" : ""}`} to="/">
          LOGO
        </Link>
        <div className="nav-links-container">
          <Link
            className={`nav-link ${pathname === "/explore" ? "active" : ""}`}
            to="/explore"
          >
            Explore
          </Link>
          <Link
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            to="/about"
          >
            About
          </Link>
        </div>
        <Link
          className={`nav-button ${pathname === "/login" ? "active" : ""}`}
          to="/login"
        >
          Login
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
