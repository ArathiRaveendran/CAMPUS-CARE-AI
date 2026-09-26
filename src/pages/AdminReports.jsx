import { useState } from "react";
import "./AdminReports.css";

function AdminReports({ setPage }) {
  const [period, setPeriod] = useState("This Month");

  return (
    <div className="admin-reports-page">

      {/* Navigation */}
      <nav className="admin-dashboard-nav">

        <button
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
          className="active"
          type="button"
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
      <header className="admin-reports-header">

        <div>
          <h1>
            Campus Care <span>AI</span>
          </h1>

          <p>Reports & Analytics</p>
        </div>

        <button
          className="admin-profile-icon"
          type="button"
          onClick={() => setPage("admin-profile")}
        >
          👤
        </button>

      </header>

      {/* Content */}
      <main className="admin-reports-content">

        <div className="admin-reports-title">

          <div>
            <h2>Campus Reports</h2>

            <p>
              Overview of campus support activity.
            </p>
          </div>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>

        </div>

        {/* Statistics */}
        <section className="admin-report-stats">

          <div className="admin-report-card">
            <div className="report-icon">📋</div>
            <div>
              <h3>24</h3>
              <p>Total Requests</p>
            </div>
          </div>

          <div className="admin-report-card">
            <div className="report-icon">✓</div>
            <div>
              <h3>10</h3>
              <p>Resolved</p>
            </div>
          </div>

          <div className="admin-report-card">
            <div className="report-icon">⏳</div>
            <div>
              <h3>8</h3>
              <p>Pending</p>
            </div>
          </div>

          <div className="admin-report-card">
            <div className="report-icon">🔄</div>
            <div>
              <h3>6</h3>
              <p>In Progress</p>
            </div>
          </div>

        </section>

        {/* Report Sections */}
        <section className="admin-report-grid">

          <div className="admin-report-panel">

            <h3>Requests by Category</h3>

            <div className="report-row">
              <span>Academic</span>
              <strong>8</strong>
            </div>

            <div className="report-row">
              <span>Hostel</span>
              <strong>6</strong>
            </div>

            <div className="report-row">
              <span>Technical</span>
              <strong>5</strong>
            </div>

            <div className="report-row">
              <span>Counselling</span>
              <strong>3</strong>
            </div>

            <div className="report-row">
              <span>Other</span>
              <strong>2</strong>
            </div>

          </div>

          <div className="admin-report-panel">

            <h3>Request Status</h3>

            <div className="status-report">
              <span>Resolved</span>
              <div className="status-bar">
                <div className="status-bar-fill resolved-fill"></div>
              </div>
              <strong>42%</strong>
            </div>

            <div className="status-report">
              <span>Pending</span>
              <div className="status-bar">
                <div className="status-bar-fill pending-fill"></div>
              </div>
              <strong>33%</strong>
            </div>

            <div className="status-report">
              <span>In Progress</span>
              <div className="status-bar">
                <div className="status-bar-fill progress-fill"></div>
              </div>
              <strong>25%</strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminReports;