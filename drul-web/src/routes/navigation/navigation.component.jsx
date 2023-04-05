import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUid, logout } from "../../store/reducers/users/userAuthSlice";

import "./navigation.styles.scss";

import logo from "../../assets/logo.png";
import { signOutUser } from "../../utils/firebase.utils";
import ProfileDropdown from "../../components/dropdown/dropdown.component";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.userAuth.value);

  const handleLogOut = async () => {
    await signOutUser();
    dispatch(logout());
    dispatch(clearUid());
    navigate("login");
  };

  const handleProfile = () => {
    console.log("HIT PROFILE");
    navigate("profile");
  };

  const handleHitlist = () => {
    navigate("hitlist");
  };

  return (
    <>
      <div className="navigation-container">
        <Link className={`logo ${pathname === "/" ? "active" : ""}`} to="/">
          <img className="logo-png" src={logo} alt="logo" />
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

        {loginStatus ? (
          <Link className="nav-button loggedin">
            <ProfileDropdown
              logout={handleLogOut}
              profile={handleProfile}
              hitlist={handleHitlist}
            />
          </Link>
        ) : (
          <Link
            className={`nav-button ${pathname === "/login" ? "active" : ""}`}
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
