import "./AdminDashboard.css";

function AdminDashboard({ setPage }) {
  return (
    <div className="admin-dashboard-page">

      {/* Navigation */}
      <nav className="admin-dashboard-nav">

        <button
          className="active"
          type="button"
          onClick={() => setPage("admin-dashboard")}
        >
          🏠 Dashboard
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-students")}
        >
          👥 Students
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-staff")}
        >
          🛡️ Staff
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-requests")}
        >
          📋 Requests
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-reports")}
        >
          📊 Reports
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-profile")}
        >
          👤 Profile
        </button>

        <button
          type="button"
          onClick={() => setPage("home")}
        >
          🚪 Logout
        </button>

      </nav>

      {/* Header */}
      <header className="admin-dashboard-header">

        <div>
          <h1>
            Campus Care <span>AI</span>
          </h1>

          <p>Admin Dashboard</p>
        </div>

        <button
          className="admin-profile-icon"
          type="button"
          onClick={() => setPage("admin-profile")}
        >
          👤
        </button>

      </header>

      {/* Welcome */}
      <section className="admin-welcome">

        <p>Welcome back 👋</p>

        <h2>Campus Administration</h2>

        <span>
          Manage students, staff, requests and campus support services.
        </span>

      </section>

      {/* Statistics */}
      <section className="admin-stats">

        <div className="admin-stat-card">
          <div className="admin-stat-icon">👥</div>

          <div>
            <h3>120</h3>
            <p>Total Students</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">🛡️</div>

          <div>
            <h3>12</h3>
            <p>Total Staff</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">📋</div>

          <div>
            <h3>24</h3>
            <p>Total Requests</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">✓</div>

          <div>
            <h3>10</h3>
            <p>Resolved</p>
          </div>
        </div>

      </section>

      {/* Quick Actions */}
      <section className="admin-actions">

        <h2>Quick Actions</h2>

        <div className="admin-action-grid">

          <div className="admin-action-card">

            <div className="action-icon">👥</div>

            <h3>Manage Students</h3>

            <p>
              View and manage student information.
            </p>

            <button
              type="button"
              onClick={() => setPage("admin-students")}
            >
              View Students →
            </button>

          </div>

          <div className="admin-action-card">

            <div className="action-icon">🛡️</div>

            <h3>Manage Staff</h3>

            <p>
              View and manage campus staff members.
            </p>

            <button
              type="button"
              onClick={() => setPage("admin-staff")}
            >
              View Staff →
            </button>

          </div>

          <div className="admin-action-card">

            <div className="action-icon">📋</div>

            <h3>View Requests</h3>

            <p>
              Monitor all student support requests.
            </p>

            <button
              type="button"
              onClick={() => setPage("admin-requests")}
            >
              View Requests →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AdminDashboard;