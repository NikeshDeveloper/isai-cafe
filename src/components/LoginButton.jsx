import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      redirect_uri: window.location.origin  // Optional, you can override here
    });
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      <i className="material-icons">login</i>  {/* Material Icon for login */}
      <span>Log in</span>
    </button>
  );
};

export default LoginButton;
