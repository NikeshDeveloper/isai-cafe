import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './AuthenticationHelper.css';

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

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    // Clear all localStorage items
    localStorage.clear();

    // Clear all sessionStorage items (optional, if used)
    sessionStorage.clear();

    // Delete all cookies
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    });

    // Perform Auth0 logout
    logout({
      returnTo: window.location.origin, // Redirects to the homepage after logout
    });
  };

  return (
    <button className="login-button" onClick={handleLogout}>
      <i className="material-icons">logout</i> {/* Material Icon for logout */}
      <span>Log Out</span>
    </button>
  );
};




export { LoginButton, LogoutButton };
