import { useState } from "react";
import "./StaffLogin.css";

function StaffLogin({ setPage }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = (event) => {
    event.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Password reset instructions have been sent to your email."
    );
  };

  return (
    <div className="staff-login-page">

      <div className="staff-login-card">

        <div className="staff-login-logo">
          🛡️
        </div>

        <h1>
          Campus Care <span>AI</span>
        </h1>

        <p className="staff-login-subtitle">
          Staff Portal
        </p>

        <div className="staff-login-divider"></div>

        {showForgotPassword ? (

          <form onSubmit={handleForgotPassword}>

            <h2>Forgot Password?</h2>

            <p>
              Enter your registered email address to reset your password.
            </p>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button
              className="staff-login-submit"
              type="submit"
            >
              Send Reset Link
              <span>→</span>
            </button>

            {message && (
              <p className="staff-forgot-message">
                {message}
              </p>
            )}

            <button
              className="staff-back-home"
              type="button"
              onClick={() => {
                setShowForgotPassword(false);
                setMessage("");
              }}
            >
              ← Back to Login
            </button>

          </form>

        ) : (

          <form>

            <label>Staff ID</label>

            <input
              type="text"
              placeholder="Enter your Staff ID"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />

            <div className="staff-login-options">

              <label className="staff-remember">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="staff-forgot-password"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="staff-login-submit"
              type="button"
              onClick={() => setPage("staff-dashboard")}
            >
              Login
              <span>→</span>
            </button>

          </form>

        )}

        <button
          className="staff-back-home"
          type="button"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default StaffLogin;