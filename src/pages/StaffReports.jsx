import { useState } from "react";
import "./StaffReports.css";

function StaffReports({ setPage }) {
    const [period, setPeriod] = useState("This Month");
  return (
    <div className="staff-reports-page">

      <div className="staff-reports-header">

        <div>
          <h1>Reports</h1>
          <p>View campus support statistics and reports.</p>
        </div>
        <button
  className="back-dashboard-button"
  onClick={() => setPage("staff-dashboard")}
  type="button"
>
  ← Back to Dashboard
</button>
        <select
  value={period}
  onChange={(e) => setPeriod(e.target.value)}
>
  <option>This Month</option>
  <option>Last Month</option>
  <option>This Year</option>
</select>
      </div>

      <div className="report-stats">

        <div className="report-card">
          <div className="report-icon">📋</div>
          <h2>24</h2>
          <p>Total Requests</p>
        </div>

        <div className="report-card">
          <div className="report-icon">⏳</div>
          <h2>8</h2>
          <p>Pending</p>
        </div>

        <div className="report-card">
          <div className="report-icon">🔄</div>
          <h2>6</h2>
          <p>In Progress</p>
        </div>

        <div className="report-card">
          <div className="report-icon">✓</div>
          <h2>10</h2>
          <p>Resolved</p>
        </div>

      </div>

      <div className="report-section">

        <h2>Request Summary</h2>

        <div className="report-summary">

          <div>
            <span>Academic Support</span>
            <strong>6 Requests</strong>
          </div>

          <div>
            <span>Technical Issues</span>
            <strong>8 Requests</strong>
          </div>

          <div>
            <span>Hostel / Accommodation</span>
            <strong>5 Requests</strong>
          </div>

          <div>
            <span>Facilities</span>
            <strong>3 Requests</strong>
          </div>

          <div>
            <span>Other</span>
            <strong>2 Requests</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StaffReports;