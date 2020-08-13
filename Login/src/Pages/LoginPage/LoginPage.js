import React from "react";
import Keys from "../../config";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { setUser } from "../../Redux/actions/userAction";
import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";

const LoginPage = ({ user, setUser }) => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  if (user) return <Redirect to="/" />;
  return (
    <div>
      <GoogleLogin
        clientId={Keys.Client_id}
        isSignedIn={true}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="303151077603305"
        autoLoad={false}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </div>
  );
};
const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps, { setUser })(LoginPage);
