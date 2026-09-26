import { useState } from "react";
import "./RequestPage.css";

function RequestPage({ setPage, setRequests }) {
  const [requestType, setRequestType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRequest = {
      id: Date.now(),
      type: requestType,
      subject: subject,
      description: description,
      priority: priority,
      photo: photo,
      status: "Pending",
      date: new Date().toLocaleDateString("en-GB"),
    };

    setRequests((previousRequests) => [
      ...previousRequests,
      newRequest,
    ]);

    setSubmitted(true);
  };

  return (
    <div className="request-page">

      <div className="request-card">

        <button
          type="button"
          className="back-dashboard-button"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Dashboard
        </button>

        <h1>Submit a Request</h1>

        <p className="request-subtitle">
          Tell us how we can help you.
        </p>

        {submitted ? (
          <div className="success-message">

            <div className="success-icon">✓</div>

            <h2>Request Submitted!</h2>

            <p>
              Your request has been submitted successfully.
              You can track it from My Requests.
            </p>

            <button
              type="button"
              onClick={() => setPage("requests")}
            >
              View My Requests →
            </button>

            <button
              type="button"
              className="another-request"
              onClick={() => {
                setSubmitted(false);
                setRequestType("");
                setSubject("");
                setDescription("");
                setPriority("");
                setPhoto(null);
              }}
            >
              Submit Another Request
            </button>

          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <label>Request Type</label>

            <select
              value={requestType}
              onChange={(event) => setRequestType(event.target.value)}
              required
            >
              <option value="">Select request type</option>
              <option>Academic Support</option>
              <option>Technical Issue</option>
              <option>Hostel / Accommodation</option>
              <option>Facilities</option>
              <option>Other</option>
            </select>

            <label>Subject</label>

            <input
              type="text"
              placeholder="Enter the subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            />

            <label>Description</label>

            <textarea
              placeholder="Describe your issue or request..."
              rows="5"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            ></textarea>
            <label>Attach Photo (Optional)</label>

<input
  type="file"
  accept="image/*"
  onChange={(event) => setPhoto(event.target.files[0])}
/>

{photo && (
  <div className="photo-preview">
    <p>Selected Photo:</p>
    <img
      src={URL.createObjectURL(photo)}
      alt="Complaint preview"
    />
  </div>
)}

            <label>Priority</label>

            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              required
            >
              <option value="">Select priority</option>
              <option>Normal</option>
              <option>High</option>
              <option>Urgent</option>
            </select>

            <button type="submit">
              Submit Request →
            </button>

          </form>
        )}

      </div>

    </div>
  );
}

export default RequestPage;