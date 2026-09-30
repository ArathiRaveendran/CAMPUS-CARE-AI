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


          <div className="admin-report-card">
            <div className="report-icon">🚨</div>

            <div>
              <h3>5</h3>
              <p>High Priority</p>
            </div>
          </div>


          <div className="admin-report-card">
            <div className="report-icon">⏱️</div>

            <div>
              <h3>2.4 Days</h3>
              <p>Avg. Resolution Time</p>
            </div>
          </div>

        </section>


        {/* Category + Status */}
        <section className="admin-report-grid">

          {/* Categories */}
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
              <span>Technical / IT</span>
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


          {/* Status */}
          <div className="admin-report-panel">

            <h3>Request Status</h3>

            <div className="status-report">

              <span>Resolved</span>

              <div className="status-bar">
                <div
                  className="status-bar-fill resolved-fill"
                  style={{ width: "42%" }}
                ></div>
              </div>

              <strong>42%</strong>

            </div>


            <div className="status-report">

              <span>Pending</span>

              <div className="status-bar">
                <div
                  className="status-bar-fill pending-fill"
                  style={{ width: "33%" }}
                ></div>
              </div>

              <strong>33%</strong>

            </div>


            <div className="status-report">

              <span>In Progress</span>

              <div className="status-bar">
                <div
                  className="status-bar-fill progress-fill"
                  style={{ width: "25%" }}
                ></div>
              </div>

              <strong>25%</strong>

            </div>

          </div>

        </section>


        {/* Department Performance */}
        <section className="admin-report-panel department-performance">

          <h3>Department Performance</h3>

          <div className="department-table">

            <div className="department-row department-header">
              <span>Department</span>
              <span>Requests</span>
              <span>Resolved</span>
              <span>Avg. Resolution</span>
            </div>


            <div className="department-row">
              <span>IT Support</span>
              <strong>7</strong>
              <strong>5</strong>
              <span>1.8 Days</span>
            </div>


            <div className="department-row">
              <span>Academic</span>
              <strong>6</strong>
              <strong>3</strong>
              <span>2.6 Days</span>
            </div>


            <div className="department-row">
              <span>Hostel</span>
              <strong>5</strong>
              <strong>2</strong>
              <span>3.1 Days</span>
            </div>


            <div className="department-row">
              <span>Maintenance</span>
              <strong>4</strong>
              <strong>2</strong>
              <span>2.3 Days</span>
            </div>


            <div className="department-row">
              <span>Student Services</span>
              <strong>2</strong>
              <strong>1</strong>
              <span>2.8 Days</span>
            </div>

          </div>

        </section>


        {/* Priority Distribution */}
        <section className="admin-report-panel priority-distribution">

          <h3>Priority Distribution</h3>

          <div className="priority-report-row">

            <span>Critical</span>

            <div className="priority-bar">
              <div
                className="priority-bar-fill critical-fill"
                style={{ width: "8%" }}
              ></div>
            </div>

            <strong>8%</strong>

          </div>


          <div className="priority-report-row">

            <span>High</span>

            <div className="priority-bar">
              <div
                className="priority-bar-fill high-fill"
                style={{ width: "21%" }}
              ></div>
            </div>

            <strong>21%</strong>

          </div>


          <div className="priority-report-row">

            <span>Medium</span>

            <div className="priority-bar">
              <div
                className="priority-bar-fill medium-fill"
                style={{ width: "46%" }}
              ></div>
            </div>

            <strong>46%</strong>

          </div>


          <div className="priority-report-row">

            <span>Low</span>

            <div className="priority-bar">
              <div
                className="priority-bar-fill low-fill"
                style={{ width: "25%" }}
              ></div>
            </div>

            <strong>25%</strong>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminReports;