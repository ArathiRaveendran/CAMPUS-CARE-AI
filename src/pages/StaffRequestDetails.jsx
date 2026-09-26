import { useState } from "react";
import "./StaffRequestDetails.css";

function StaffRequestDetails({ setPage }) {
  const [status, setStatus] = useState("Pending");
  return (
    <div className="staff-request-details-page">

      <div className="staff-request-details-header">
        <button
          className="back-requests"
          onClick={() => setPage("staff-requests")}
        >
          ← Back to Requests
        </button>

        <span className="details-status">
  {status}
</span>
      </div>

      <div className="staff-request-details-card">

        <div className="details-title">
          <span>REQ001</span>
          <h1>Wi-Fi connection problem</h1>
          <p>John Student • Technical Issue</p>
        </div>

        <div className="details-grid">

          <div className="details-item">
  <span>Status</span>
  <strong>{status}</strong>
</div>

          <div className="details-item">
            <span>Request ID</span>
            <strong>REQ001</strong>
          </div>

          <div className="details-item">
            <span>Request Type</span>
            <strong>Technical Issue</strong>
          </div>

          <div className="details-item">
            <span>Priority</span>
            <strong>High</strong>
          </div>

          <div className="details-item">
            <span>Submitted Date</span>
            <strong>26/09/2026</strong>
          </div>

          <div className="details-item">
            <span>Status</span>
            <strong>Pending</strong>
          </div>

        </div>

        <div className="details-description">
          <h2>Description</h2>

          <p>
            The student is experiencing problems connecting to
            the campus Wi-Fi network. The connection keeps
            disconnecting and the student is unable to access
            online learning resources.
          </p>
        </div>

        <div className="details-actions">
         <button
  className="start-button"
  onClick={() => setStatus("In Progress")}
>
  Start Progress
</button> 

          <button
            className="close-button"
            onClick={() => setPage("staff-requests")}
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}

export default StaffRequestDetails;