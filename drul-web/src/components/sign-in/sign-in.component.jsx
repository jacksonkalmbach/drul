import { signInWithGooglePopup } from "../../utils/firebase.utils";
import "./sign-in.styles.scss";

const SignInForm = () => {
  const handleForgotPassword = () => {
    alert("forgot password!");
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
          onClick={signInWithGooglePopup}
        />
      </div>
    </div>
  );
};

export default SignInForm;
