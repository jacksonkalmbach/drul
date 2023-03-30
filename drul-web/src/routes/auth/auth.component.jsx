import { useState } from "react";
import SignInForm from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";

import "./auth.styles.scss";

const Auth = () => {
  const [authChoice, setAuthChoice] = useState("signin");
  console.log(authChoice);

  const toggleAuth = () => {
    setAuthChoice(authChoice === "signin" ? "signup" : "signin");
  };

  return (
    <div className="auth-container">
      <div className="app-preview">
        <h2>Coming soon to mobile!</h2>
      </div>
      <div className="auth-options">
        <h1 style={{ fontSize: "50px" }}>DRÜL</h1>
        <div>
          {authChoice === "signin" ? (
            <h1>Welcome Back</h1>
          ) : (
            <h1>Create Account</h1>
          )}
        </div>
        <div className={`toggle-auth toggle-auth--${authChoice}`}>
          <div
            className={`toggle-auth-option ${
              authChoice === "signin" ? "active" : ""
            }`}
            onClick={toggleAuth}
          >
            Sign In
          </div>
          <div
            className={`toggle-auth-option ${
              authChoice === "signup" ? "active" : ""
            }`}
            onClick={toggleAuth}
          >
            Sign Up
          </div>
        </div>
        <div className="form-container">
          {authChoice === "signin" ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
