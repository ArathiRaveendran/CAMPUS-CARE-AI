import "./MyRequests.css";

function MyRequests({ requests, setPage }) {
  return (
    <div className="requests-page">

      <div className="requests-header">
        <div>
          <h1>My Requests</h1>
          <p>Track your submitted requests and complaints.</p>
        </div>

        <button
          className="new-request-button"
          onClick={() => setPage("request")}
        >
          + New Request
        </button>
      </div>

      {/* Back to Dashboard */}
      <button
        className="back-dashboard-button"
        onClick={() => setPage("dashboard")}
      >
        ← Back to Dashboard
      </button>

      {requests.length === 0 ? (
        <div className="empty-requests">
          <div className="empty-icon">📋</div>

          <h2>No Requests Yet</h2>

          <p>
            You haven't submitted any requests yet.
          </p>

          <button onClick={() => setPage("request")}>
            Submit Your First Request →
          </button>
        </div>
      ) : (
        <div className="requests-list">

          {requests.map((request) => (
            <div className="request-item" key={request.id}>

              <div className="request-details">
                <h3>{request.subject}</h3>

                <p>
                  {request.type} • Submitted on {request.date}
                </p>

                <small>
                  Priority: {request.priority}
                </small>

                {request.photo && (
                  <div className="request-photo">
                    <p>📷 Attached Photo</p>
                    <img
                      src={URL.createObjectURL(request.photo)}
                      alt="Complaint"
                    />
                  </div>
                )}
              </div>

              <span className="status pending">
                {request.status}
              </span>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default MyRequests;