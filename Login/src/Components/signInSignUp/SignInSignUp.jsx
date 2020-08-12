import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInSignUp = (props) => {
  return (
    <div className="signin-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
