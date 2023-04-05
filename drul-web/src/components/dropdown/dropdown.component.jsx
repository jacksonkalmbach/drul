import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase.utils";
import { logout } from "../../store/reducers/users/userAuthSlice";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOutUser();
    dispatch(logout());
    navigate("login");
    console.log("HIT SIGNOUT");
  };

  const handleProfile = () => {
    navigate("profile");
  };

  const handleHitlist = () => {
    navigate("hitlist");
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span className="material-symbols-outlined">person</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div onClick={handleProfile} className="dropdown-item">
          Profile
        </div>
        <div onClick={handleHitlist} className="dropdown-item">
          Hitlist
        </div>
        <div onClick={handleSignOut} className="dropdown-item">
          Logout
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
