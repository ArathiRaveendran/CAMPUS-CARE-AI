import "./AdminLogin.css";

function AdminLogin({ setPage }) {
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