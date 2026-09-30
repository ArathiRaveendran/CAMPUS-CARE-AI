import { useState } from "react";
import "./StaffRequestDetails.css";

function StaffRequestDetails({ setPage }) {
  const [status, setStatus] = useState("Submitted");
  const [comment, setComment] = useState("");
  const [savedComment, setSavedComment] = useState("");

  const handleSaveUpdate = () => {
  setSavedComment(comment || "Update saved successfully.");
  alert("Staff update saved successfully.");
};

const handleResolve = () => {
  setStatus("Resolved");
  alert("Complaint marked as Resolved.");
};

const handleForward = () => {
  setStatus("Assigned");
  alert("Complaint forwarded successfully.");
};

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

        {/* REQUEST TITLE */}
        <div className="details-title">
          <span>REQ001</span>

          <h1>Wi-Fi connection problem</h1>

          <p>John Student • Technical Issue</p>
        </div>


        {/* REQUEST INFORMATION */}
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
            <span>Location</span>
            <strong>College Campus</strong>
          </div>

        </div>


        {/* DESCRIPTION */}
        <div className="details-description">

          <h2>Description</h2>

          <p>
            The student is experiencing problems connecting to
            the campus Wi-Fi network. The connection keeps
            disconnecting and the student is unable to access
            online learning resources.
          </p>

        </div>


        {/* AI ANALYSIS */}
        <div className="ai-analysis-section">

          <div className="ai-analysis-header">

            <span className="ai-icon">🤖</span>

            <div>
              <h2>AI Complaint Analysis</h2>

              <p>
                AI-generated analysis for staff review
              </p>
            </div>

          </div>


          <div className="ai-analysis-grid">

            <div className="ai-analysis-item">
              <span>AI Category</span>
              <strong>Internet / IT</strong>
            </div>

            <div className="ai-analysis-item">
              <span>AI Priority</span>
              <strong className="ai-high">High</strong>
            </div>

            <div className="ai-analysis-item">
              <span>Suggested Department</span>
              <strong>IT Support</strong>
            </div>

            <div className="ai-analysis-item">
              <span>Similar Complaints</span>
              <strong>3 similar complaints found</strong>
            </div>

          </div>


          {/* AI SUMMARY */}
          <div className="ai-summary">

            <h3>AI Summary</h3>

            <p>
              The student is experiencing repeated campus
              Wi-Fi disconnections, preventing access to
              online learning resources.
            </p>

          </div>


          {/* AI REVIEW NOTE */}
          <div className="ai-review-note">

            <span>💡</span>

            <p>
              AI results are suggestions. Staff can review
              and modify them before taking action.
            </p>

          </div>

        </div>


        {/* STAFF ACTION */}
        <div className="staff-action-section">

          <h2>Staff Action</h2>


          {/* STATUS */}
          <label>Status</label>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option>Submitted</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
          </select>


          {/* COMMENT / RESOLUTION */}
          <label>Comment / Resolution Details</label>

          <textarea
            rows="5"
            placeholder="Add a comment, response, or resolution details..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>


          {/* SAVED COMMENT */}
          {savedComment && (
            <div className="saved-comment">

              <strong>Saved Staff Update:</strong>

              <p>{savedComment}</p>

            </div>
          )}


          {/* ACTION BUTTONS */}
          <div className="staff-action-buttons">

            <button
              className="save-update-button"
              onClick={handleSaveUpdate}
            >
              Save Update
            </button>


            <button
              className="forward-button"
              onClick={handleForward}
            >
              Forward Complaint
            </button>


            <button
              className="resolve-button"
              onClick={handleResolve}
            >
              Resolve Complaint
            </button>

          </div>

        </div>


        {/* CLOSE */}
        <div className="details-actions">

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