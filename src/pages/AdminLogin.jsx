import { useState } from "react";
import "./AdminLogin.css";

function AdminLogin({ setPage }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [forgotMessage, setForgotMessage] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!adminId.trim()) {
      setForgotMessage("Please enter your Admin ID.");
      return;
    }

    setForgotMessage(
      "If an account exists with this Admin ID, password reset instructions have been sent."
    );
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">
          🛡️
        </div>

        <h1>
          Campus Care <span>AI</span>
        </h1>

        <p className="admin-login-subtitle">
          Admin Portal
        </p>

        <div className="admin-login-divider"></div>

        {!showForgotPassword ? (
          <>
            <form>

              <label>Admin ID</label>

              <input
                type="text"
                placeholder="Enter your Admin ID"
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />

              <button
                className="admin-login-submit"
                type="button"
                onClick={() => setPage("admin-dashboard")}
              >
                Login
                <span>→</span>
              </button>

            </form>

            <button
              className="admin-forgot-password"
              type="button"
              onClick={() => {
                setShowForgotPassword(true);
                setForgotMessage("");
              }}
            >
              Forgot Password?
            </button>
          </>
        ) : (
          <form onSubmit={handleForgotPassword}>

            <label>Admin ID</label>

            <input
              type="text"
              placeholder="Enter your Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
            />

            <button
              className="admin-login-submit"
              type="submit"
            >
              Send Reset Instructions
              <span>→</span>
            </button>

            {forgotMessage && (
              <div className="admin-forgot-message">
                {forgotMessage}
              </div>
            )}

            <button
              className="admin-forgot-password"
              type="button"
              onClick={() => {
                setShowForgotPassword(false);
                setForgotMessage("");
              }}
            >
              ← Back to Login
            </button>

          </form>
        )}

        <button
          className="admin-back-home"
          type="button"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default AdminLogin;