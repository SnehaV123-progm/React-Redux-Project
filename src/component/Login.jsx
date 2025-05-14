// src/component/Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  // Scroll to the Sign In section
  const handleSignInClick = () => {
    setIsCreateAccount(false);
    document.getElementById("sign-in-form").scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the Create Account section
  const handleCreateAccountClick = () => {
    setIsCreateAccount(true);
    document.getElementById("create-account-form").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="login-container">
      {/* Sign In Section */}
      {!isCreateAccount ? (
        <div id="sign-in-form" className="form-container">
          <h2>Sign In</h2>
          <form>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={handleCreateAccountClick}>
              Create a new account
            </a>
          </p>
        </div>
      ) : (
        // Create Account Section
        <div id="create-account-form" className="form-container">
          <h2>Create an Account</h2>
          <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirm-password" placeholder="Confirm Password" required />
            <button type="submit">Create Account</button>
          </form>
          <p>
            Already have an account?{" "}
            <a href="#" onClick={handleSignInClick}>
              Sign In
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
