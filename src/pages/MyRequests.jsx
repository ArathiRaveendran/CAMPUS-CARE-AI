import { useState } from "react";
import "./MyRequests.css";

function MyRequests({ requests, setPage }) {
  const [ratings, setRatings] = useState({});
  const [feedback, setFeedback] = useState({});
  const [submittedFeedback, setSubmittedFeedback] = useState({});

  const handleSubmitFeedback = (requestId) => {
    setSubmittedFeedback((previous) => ({
      ...previous,
      [requestId]: true,
    }));
  };

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

                <p>
                  📍 Location: {request.location}
                </p>

                <p>
                  {request.description}
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

                {/* Resolution / Staff Response */}
                {(request.status === "Resolved" ||
                  request.status === "Closed") && (
                  <div className="resolution-details">

                    <h4>✓ Resolution Details</h4>

                    <p>
                      Your complaint has been reviewed and
                      marked as {request.status.toLowerCase()}.
                    </p>

                  </div>
                )}

                {/* Feedback */}
                {(request.status === "Resolved" ||
                  request.status === "Closed") && (
                  <div className="feedback-section">

                    <h4>How was your experience?</h4>

                    {!submittedFeedback[request.id] ? (
                      <>
                        <p>
                          Please rate the support you received.
                        </p>

                        <div className="rating-buttons">

                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              className={
                                ratings[request.id] === rating
                                  ? "rating-button selected"
                                  : "rating-button"
                              }
                              onClick={() =>
                                setRatings((previous) => ({
                                  ...previous,
                                  [request.id]: rating,
                                }))
                              }
                            >
                              {rating} ★
                            </button>
                          ))}

                        </div>

                        <textarea
                          placeholder="Add your feedback or comments..."
                          value={feedback[request.id] || ""}
                          onChange={(event) =>
                            setFeedback((previous) => ({
                              ...previous,
                              [request.id]: event.target.value,
                            }))
                          }
                        />

                        <button
                          className="submit-feedback-button"
                          onClick={() =>
                            handleSubmitFeedback(request.id)
                          }
                        >
                          Submit Feedback
                        </button>
                      </>
                    ) : (
                      <div className="feedback-success">
                        ✓ Thank you for your feedback!
                      </div>
                    )}

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