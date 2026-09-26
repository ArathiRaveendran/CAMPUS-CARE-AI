import { useState } from "react";
import "./StudentLogin.css";

function StudentLogin({ setPage }) {
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
    <div className="login-page">

      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          🎓
        </div>

        {/* Heading */}
        <h1>
          Campus Care <span>AI</span>
        </h1>

        <p className="login-subtitle">
          Student Portal
        </p>

        <div className="login-divider"></div>

        {showForgotPassword ? (

          /* Forgot Password */
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
              className="login-submit"
              type="submit"
            >
              Send Reset Link
              <span>→</span>
            </button>

            {message && (
              <p className="forgot-message">
                {message}
              </p>
            )}

            <button
              className="back-home"
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

          /* Login Form */
          <form>

            <label>Student ID</label>

            <input
              type="text"
              placeholder="Enter your Student ID"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />

            <div className="login-options">

              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="login-submit"
              type="button"
              onClick={() => setPage("dashboard")}
            >
              Login
              <span>→</span>
            </button>

          </form>

        )}

        {/* Back to Home */}
        <button
          className="back-home"
          type="button"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default StudentLogin;