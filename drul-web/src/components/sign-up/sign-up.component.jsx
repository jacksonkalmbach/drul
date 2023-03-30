import "./sign-up.styles.scss";

const SignUpForm = () => {
  return (
    <div className="sign-in-options">
      <form className="sign-in-form">
        <input className="form-input" placeholder="Display Name" />
        <input className="form-input" placeholder="Email" />
        <input className="form-input" placeholder="Password" />
        <input className="form-input" placeholder="Confirm Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
