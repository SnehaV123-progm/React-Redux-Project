import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSignInClick = (e) => {
    e.preventDefault();
    setIsCreateAccount(false);
    document.getElementById("sign-in-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    setIsCreateAccount(true);
    document.getElementById("create-account-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
    setEmailSent(false);
    setResetEmail('');
  };

  const handleSendResetEmail = () => {
    // Here you would typically call your backend API to send the email.
    // Simulating success:
    setEmailSent(true);
  };

  const closeModal = () => {
    setShowForgotPassword(false);
    setEmailSent(false);
    setResetEmail('');
  };

  return (
    <div className="login-container">
      {!isCreateAccount ? (
        <div id="sign-in-form" className="form-container">
          <h2>Sign In</h2>
          <form>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p><a href="#" onClick={handleForgotPasswordClick}>Forgot Password?</a></p>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={handleCreateAccountClick}>Create a new account</a>
          </p>
        </div>
      ) : (
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
            Already have an account?{' '}
            <a href="#" onClick={handleSignInClick}>Sign In</a>
          </p>
        </div>
      )}

      {showForgotPassword && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Reset Password</h3>
            {!emailSent ? (
              <form onSubmit={(e) => {
            e.preventDefault();
            handleSendResetEmail();
          }}
>
  <p>Enter your email address to receive a password reset link.</p>
  <input
    type="email"
    placeholder="Email"
    value={resetEmail}
    onChange={(e) => setResetEmail(e.target.value)}
    required
  />
  <div className="modal-buttons">
    <button type="submit">Submit</button>
    <button type="button" onClick={closeModal}>Cancel</button>
  </div>
</form>

            ) : (
              <>
                <p>An email has been sent to <strong>{resetEmail}</strong> to reset your password.</p>
                <button onClick={closeModal}>Close</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
