import { useState } from "react";
import SignInForm from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";
import mobilePreview from "../../assets/mobile-preview.png";

import "./auth.styles.scss";

const Auth = () => {
  const [authChoice, setAuthChoice] = useState("signin");

  const toggleAuth = () => {
    setAuthChoice(authChoice === "signin" ? "signup" : "signin");
  };

  return (
    <div className="auth-container">
      <div className="app-preview">
        <h2>Coming soon to mobile!</h2>
        <img
          className="mobile-preview"
          src={mobilePreview}
          alt="mobile-preview"
        />
      </div>
      <div className="auth-options">
        <h1 style={{ fontSize: "50px", marginBottom: "0" }}>DRÜL</h1>
        <div>
          {authChoice === "signin" ? (
            <h1 className="auth-subtitle">Welcome Back</h1>
          ) : (
            <h1 className="auth-subtitle">Create Account</h1>
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
