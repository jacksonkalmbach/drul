import "./sign-in.styles.scss";

const SignInForm = () => {
  return (
    <div className="sign-in-options">
      <form className="sign-in-form">
        <input className="form-input" placeholder="Email" />
        <input className="form-input" placeholder="Password" />
        <button>Login</button>
      </form>
      <p>OR</p>
      <div className="social-media-login">
        <button>FB LOGIN</button>
        <button>GOOG LOGIN</button>
      </div>
    </div>
  );
};

export default SignInForm;
