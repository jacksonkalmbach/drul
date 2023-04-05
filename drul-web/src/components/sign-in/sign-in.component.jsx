import { signInWithGooglePopup } from "../../utils/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, setUid } from "../../store/reducers/users/userAuthSlice";

import "./sign-in.styles.scss";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    alert("forgot password!");
  };

  const handleGoogleSignIn = async () => {
    const user = await signInWithGooglePopup();
    const uid = user.user.uid;
    dispatch(login());
    dispatch(setUid(uid));
    navigate(`/explore/${uid}`);
  };

  return (
    <div className="sign-in-options">
      <form className="sign-in-form">
        <input
          required
          className="form-input"
          type="email"
          placeholder="Email"
        />
        <input
          required
          className="form-input"
          type="password"
          placeholder="Password"
        />
        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
        <button>Sign Up</button>
      </form>
      <div className="social-media-login">
        <img
          className="social-btn-login"
          src="https://1.bp.blogspot.com/-E7Q8QGQi8jU/WImcvZPvYQI/AAAAAAAACTw/0Er2C5lpPrkRx_JMFTMU0ifRdjS3e4XJQCLcB/s1600/VEKTOR+ICON7.png"
          alt="fb"
        />
        <img
          className="social-btn-login"
          src="https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png"
          alt="goog"
          onClick={handleGoogleSignIn}
        />
      </div>
    </div>
  );
};

export default SignInForm;
