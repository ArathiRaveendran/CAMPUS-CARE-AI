import "./StaffDashboard.css";

function StaffDashboard({ setPage }) {
  return (
    <div className="staff-dashboard-page">

      {/* Navigation */}
      <nav className="staff-dashboard-nav">

        <button
          onClick={() => setPage("staff-dashboard")}
          className="active"
        >
          🏠 Dashboard
        </button>

       <button onClick={() => setPage("staff-requests")}>
  📋 Requests
</button>

       <button onClick={() => setPage("staff-students")}>
  👥 Students
</button>

       <button onClick={() => setPage("staff-reports")}>
  📊 Reports
</button>

      <button
  type="button"
  onClick={() => setPage("staff-profile")}
>
  👤 Profile
</button>

        <button onClick={() => setPage("home")}>
          🚪 Logout
        </button>

      </nav>

      {/* Header */}
      <header className="staff-dashboard-header">

        <div>
          <h1>
            Campus Care <span>AI</span>
          </h1>

          <p>Staff Dashboard</p>
        </div>

        <button
  className="staff-profile-icon"
  onClick={() => setPage("staff-profile")}
  type="button"
>
  👤
</button>

      </header>

      {/* Welcome */}
      <section className="staff-welcome">

        <p>Welcome back 👋</p>

        <h2>
          Manage Campus Support
        </h2>

        <span>
          Review student requests and manage campus support services.
        </span>

      </section>

      {/* Statistics */}
      <section className="staff-stats">

        <div className="staff-stat-card">
          <div className="staff-stat-icon">📋</div>
          <div>
            <h3>24</h3>
            <p>Total Requests</p>
          </div>
        </div>

        <div className="staff-stat-card">
          <div className="staff-stat-icon">⏳</div>
          <div>
            <h3>8</h3>
            <p>Pending Requests</p>
          </div>
        </div>

        <div className="staff-stat-card">
          <div className="staff-stat-icon">🔄</div>
          <div>
            <h3>6</h3>
            <p>In Progress</p>
          </div>
        </div>

        <div className="staff-stat-card">
          <div className="staff-stat-icon">✓</div>
          <div>
            <h3>10</h3>
            <p>Resolved</p>
          </div>
        </div>

      </section>

      {/* Quick Actions */}
      <section className="staff-actions">

        <h2>Quick Actions</h2>

        <div className="staff-action-grid">

          <div className="staff-action-card">
            <div className="action-icon">📋</div>
            <h3>View Requests</h3>
            <p>
              Review and manage student requests.
            </p>
            <button onClick={() => setPage("staff-requests")}>
  View Requests →
</button>
          </div>

          <div className="staff-action-card">
            <div className="action-icon">👥</div>
            <h3>Student Management</h3>
            <p>
              View student information and support details.
            </p>
            <button onClick={() => setPage("staff-students")}>
  View Students →
</button>
          </div>

          <div className="staff-action-card">
            <div className="action-icon">📊</div>
            <h3>Reports</h3>
            <p>
              View campus support reports and statistics.
            </p>
           <button onClick={() => setPage("staff-reports")}>
  View Reports →
</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default StaffDashboard;