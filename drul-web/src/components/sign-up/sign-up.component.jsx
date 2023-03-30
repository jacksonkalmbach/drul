import "../sign-in/sign-in.styles.scss";

const SignUpForm = () => {
  return (
    <div className="sign-in-options">
      <form className="sign-in-form">
        <input className="form-input" type="text" placeholder="Display Name" />
        <input className="form-input" type="email" placeholder="Email" />
        <input className="form-input" type="password" placeholder="Password" />
        <input
          className="form-input"
          type="password"
          placeholder="Confirm Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
